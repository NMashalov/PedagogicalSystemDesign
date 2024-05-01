import typing as tp
import asyncio
from dataclasses import dataclass



class WorkerChain:
    def __init__(self, *worker: 'Worker'):
        self.in_queue = asyncio.Queue()
        self.chain = worker
        self.out_queue = worker[-1].queue

    def populate(self,task_list):
        for item in task_list:
            self.in_queue.put_nowait(item)

    def __or__(self,other:'WorkerChain'):
        self.chain.append(other)
        self.out_queue = other.queue
        return self


    def start(self):
        self.out_queue.join()

class Worker:

    def __init__(self,
        num_worker: int
    ):

        self.queue = asyncio.Queue()
        self.num_worker = num_worker



    def work():

    def __add__(self, other):
        if self.out_schema != self.in_schema:
            raise Exception('Schemas no match') 

        return WorkerChain(
            self, other
        )

    def _start(self, in_queue: asyncio.Queue):
        for worker_id in range(self.num_worker):
            print(f'{self.name}_{worker_id} start')
            self.tasks.append(asyncio.create_task(self.work(worker_id, self.queue)))

    async def _join(self):
        await self.queue.join()

    async def _stop(self):
        for task in self.tasks:
            task.cancel()




