import typing as tp
import asyncio
from dataclasses import dataclass

class Worker:
    def __init__(self, 
        in_dataclass: dataclass,
        out_dataclass: dataclass,
        work : tp.Callable,
        num_worker: int
                 ):
        self.in_schema = in_dataclass
        self.out_schema = out_dataclass
        self.queue = asyncio.Queue()
        self.work = work
        self.num_worker = num_worker
        self.task = []

    def start(self, out_queue) -> self.out_schema:
        asyncio.create_task(
            self.work(worker_id, self.queue, out_queue) for worker_id in range(self.num_worker)
        )

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



class WorkerChain:
    def __init__(self, *worker: Worker):
        self.in_queue = asyncio.Queue()
        self.chain = worker
        self.out_queue = worker[-1].queue

    def populate(self,task_list):
        for item in task_list:
            self.in_queue.put_nowait(item)

    def add_worker():
        self.chain = worker

    def __or__(self,other:'WorkerChain'):
        return self(
            self, other
        )

    def start(self):
        self.out_queue.join()






