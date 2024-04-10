import asyncio
import fastapi
from itertools import cycle
import typing as tp
from uvicorn import Server, Config
import logging
import datetime
from dataclasses import dataclass
from pydantic import BaseModel


def color_generator():
    for color in cycle(['red','yellow','green']):
        yield color

@dataclass
class SentinelState:
    result: tp.Optional[str]
    new_patrol_time:  datetime.datetime


class Sentinel:
    def __init__(self, patrol_plan: tp.Generator,period: int = 10):
        self.period = 10    
        self.patrol_plan = patrol_plan()
        self.state = self.change_state(None)
    
    def change_state(self, patrol_result: tp.Optional[str]):
        self.state = SentinelState(
            result = patrol_result,
            new_patrol_time = datetime.datetime.now() + datetime.timedelta(seconds=self.period)
        ) 
        logging.warning(f'New state {self.state=}')

    async def work(self):
        for patrol_result in self.patrol_plan: 
            self.change_state(patrol_result)
            await asyncio.sleep(self.period)


class SentinelOuput(BaseModel):
    result: tp.Optional[str]
    new_patrol_sec: float

class Adapter:
    @staticmethod
    def state_to_output(state:SentinelState):
        return SentinelOuput(
            result=state.result,
            new_patrol_sec=(state.new_patrol_time - datetime.datetime.now()).total_seconds()
        )



class APIRouter:
    def __init__(self, sentinel: Sentinel):
        self.api = fastapi.FastAPI()
        self.sentinel = sentinel

    def register(self):
        @self.api.get('/state')
        def color():
            return Adapter.state_to_output(self.sentinel.state)
        
    def start(self):
        loop = asyncio.get_event_loop()
        self.register()
        loop.create_task(self.sentinel.work())
        config = Config(app=self.api, loop=loop)
        server = Server(config)
        loop.run_until_complete(server.serve())

def main():
    APIRouter(Sentinel(color_generator)).start()

main()