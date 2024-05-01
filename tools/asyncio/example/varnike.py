from bs4 import BeautifulSoup
import io
import httpx
import logging
import asyncio
from dataclasses import dataclass




@dataclass
class Work:
    time: int
    content: bytes


class Worker:





async def parse_worker(id : int, in_queue: asyncio.Queue, out_queue: asyncio.Queue):
    while True:
        try:
            req = await in_queue.get()
            print(f"[Parse Worker {id=}] Processing '{req=}'")

            data = parse_work(req)
            print(f'Status {data=}')
            await out_queue.put(data)
            # inform queue that we are done with data we took
            in_queue.task_done()
        except Exception as e:
            print(e)
            in_queue.task_done()
            continue



async def task_worker(id : int, in_queue: asyncio.Queue, out_queue: asyncio.Queue):
    async with httpx.AsyncClient() as client:
        while True:
            try:
                url = await in_queue.get()
                logging.info(f"[Task Worker {id=}] Processing '{url=}'")
                data = await client.get(url)
                logging.info(f'Status {data}')
                await out_queue.put(data)
                # inform queue that we are done with data we took
                in_queue.task_done()
            except:
                in_queue.task_done()
                continue


def parse_work(req):
    while True:
        soup = BeautifulSoup(io.StringIO(req), 'html.parser')
        # pre
        pre_elems = soup.find("pre")
        setting = [item.text for item in pre_elems if item.name is None]
        title, question = [item.text for item in pre_elems if item.name == 'b']
        img = pre_elems.find('img')['src']
        # answer
        answer = soup.find("p", {"class": "otvet_zadachi_in"})['onmousedown'][16:-1]

        return {
            'setting': ' '.join(setting).strip(),
            'title': title.strip(),
            'question': question.strip(),
            'img_url': BASE_URL + 'Detektiv/1-VARNIKE/' +img,
            'answer': answer
        }