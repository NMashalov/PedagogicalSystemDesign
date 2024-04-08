import asyncio 
import time


async def cor():
    await asyncio.sleep(2)
    return 3

def test_1():
    c = cor()
    print(c)
    time.sleep(3)
    print(c)

def test_2():
    loop = asyncio.get_event_loop()
    c = cor()
    print(c)
    loop.create_task(c)
    time.sleep(3)
    print(c)

async def test_3():
    c = cor()
    await asyncio.sleep(3)
    print(await c)

async def test_4():
    c = asyncio.create_task(cor())
    await asyncio.sleep(3)
    print(await c)

def timer():
    start = time.time()
    #test_1()
    #test_2()
    asyncio.run(test_4())
    print(time.time() - start)

timer()
