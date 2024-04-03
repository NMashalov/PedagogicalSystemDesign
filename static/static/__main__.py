from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn
import logging 
from enum import Enum
from pydantic_settings import BaseSettings, SettingsConfigDict

class StaticCfg(BaseSettings):
    model_config = SettingsConfigDict(env_prefix="STATIC_", case_sensitive=False)
    root_path: str = '/api/v1/'
    serve_port: int = 8080


def main():  
    cfg = StaticCfg()
    app = FastAPI(
        root_path=cfg.root_path
    ) 

    class Form(BaseModel):
        username: str
        password: str

    @app.post('/validate')
    def validate_form(form: Form):
        return 1
    
    state = True
    
    class CarType(str,Enum):
        bad_car = 'bad car'
        good_car = 'good car'
    

    class Event(BaseModel):
        id: int = 1
        car: CarType = CarType.good_car

    class DecisionType(str,Enum):
        yes = 'yes'
        no = 'no'

    @app.get('/get_event')
    def event():
        return [Event()]

    class Decision(BaseModel):
        decision: DecisionType

    @app.post('/validate_decision')
    def decision(decision: Decision):
        if decision.decision == DecisionType.yes:
            return 'Correct'
        else:
            return 'Incorrect'
 
    uvicorn.run(app,port=cfg.serve_port,log_level=logging.DEBUG, host="0.0.0.0")
