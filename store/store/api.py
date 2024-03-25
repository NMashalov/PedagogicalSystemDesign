import fastapi
from fastapi import HTTPException
from pydantic import BaseModel
from datetime import datetime
from enum import Enum
from .db_model import Type
from .db_manager import Crud
import uvicorn
import logging
import typing as tp

class EventResponse(BaseModel):
    id: tp.Optional[int] = None
    datetime: datetime
    store: str
    type: Type


class ApiManager:
    
    def __init__(self, crud: Crud):
        self.app = fastapi.FastAPI()
        self.crud = crud

    def register_event_api(self): 

        # note that we don't require id

        @self.app.post('/upload')
        def upload(q: EventResponse):
            logging.info(q)

            return self.crud.upload_event(
                datetime=q.datetime,
                store=q.store,
                type=q.type
            )

        @self.app.get('/check/{record_id}')
        def check(record_id:int):

            logging.info(record_id)

            event = self.crud.return_event(
                id=record_id    
            )

            if event is not None:
                return EventResponse(
                    id = event.id,
                    datetime=event.datetime,
                    store = event.store,
                    type = event.type
                )
            else:
                raise HTTPException(status_code=404, detail=f"No event with {record_id}")
            
    def start_api(self,port=1234):
        uvicorn.run(self.app,port=port,log_level=logging.DEBUG,host='0.0.0.0')
