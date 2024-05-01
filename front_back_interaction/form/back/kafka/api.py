import fastapi
import uuid
from .datastruct import Event, FakeEvent 
from pydantic import BaseModel, Field
from fastapi.middleware.cors import CORSMiddleware
import datetime
import random
import uvicorn




class EventReponse(BaseModel):
    app_id: uuid.UUID
    validated: bool = True
    geo
    response_dttm: datetime.datetime = Field(default_factory=datetime.datetime.now)
    event: Event

class EventAPI:
    def __init__(self):
        self.store: dict[uuid.uuid4,Event] = {}
        self.app = fastapi.FastAPI()
        self.set_middleware()
        self.enable_event_api()

    def set_middleware(self):
        self.app.add_middleware(
            CORSMiddleware,
            allow_origins=['*'],
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        )

    def adapt_to_response(self, event_list: list[Event]):
        response = []
        for event in event_list:
            app_id = uuid.uuid4()
            self.store[app_id]  = event
            yield EventReponse(app_id=app_id,event = event)

    def enable_event_api(self):
        @self.app.get('/random_events')
        def random_event():
            num_events = random.randint(5,10)
            payload = FakeEvent.build_batch(num_events)
            return self.adapt_to_response(payload)

        @self.app.get('/event/{app_id}')
        def item(app_id: uuid.UUID):
            return EventReponse(app_id=app_id,event=self.store[app_id])
        
    def start(self):
        uvicorn.run(self.app)
