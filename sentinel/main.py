import asyncio
import uuid
from dataclasses import dataclass
import typing as tp
import time
import logging
import queue



class Sentinel:
    def __init__(self, patrol_plan : tp.Callable, patrol_period: int = 0.5, queue_size: int = 3):
        self.patrol_plan = patrol_plan()
        self.queue = queue.Queue(maxsize=queue_size)
        self.patrol_period =1

    async def schedule(self):
        for event_coro in self.patrol_plan:
            if not self.queue.full():
                self.queue.put(event_coro)
            else:  
                asyncio.create_task(self.queue.get())
            await asyncio.sleep(self.patrol_period) 

async def task(latency,counter):
    await asyncio.sleep(latency)
    msg = {
        "id": uuid.uuid4(),
        'msg': f"{counter}",
    }
    logging.warning(msg)
    return msg

def event_generator(latency: int = 10):
    counter =0 
    while (counter:= counter +1) > 0:
        yield task(latency,counter)
    
def main():
    loop = asyncio.get_event_loop()
    sentinel_1 = Sentinel(event_generator)
    loop.run_until_complete(sentinel_1.schedule())  

main()


