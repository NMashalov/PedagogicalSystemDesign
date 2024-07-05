
import socketio
import logging
from dataclasses import dataclass
import uvicorn  

@dataclass
class Person:
    name: str = 'Anton'

users: dict[int,Person] = {

}

sio = socketio.AsyncServer(async_mode='asgi')

@sio.event
async def connect(sid: int, environ : dict, auth):
    logging.info(f'connected {sid=}')
    users[sid] = Person()
    await sio.emit('connect', sid)

@sio.event
async def request(sid, data: dict):
    await sio.emit('request',{'from': sid}, room= data['to'])

@sio.event
async def end(sid:int, data: dict):
    await sio.emit('end', {'from': sid}, room= data['to'])

@sio.event
async def call(sid, data: dict):
    await sio.emit('call',{'from': sid}, room= data['to'])

@sio.event
async def disconnect(sid):
    logging.info(f'disconnect {sid=}')
    del users[sid]

if __name__ == '__main__':
    app = socketio.ASGIApp(sio)
    uvicorn.run(app,host='0.0.0.0',port=8000)
