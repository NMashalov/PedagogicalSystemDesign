import asyncio

def mark_done(future, result):
    print('setting future result to {!r}'.format(result))
    future.set_result(result)

async def main():
    loop = asyncio.get_event_loop()
    future = loop.create_future()
    print('scheduling mark_done')
    loop.call_soon(mark_done, future, 'the result')
    print('suspending the coroutine')
    result = await future
    print('awaited result: {!r}'.format(result))
    print('future result: {!r}'.format(future.result()))
    return result

if __name__ == '__main__':
    print('entering the event loop')
    result = asyncio.run(main())
    print('returned result: {!r}'.format(result))