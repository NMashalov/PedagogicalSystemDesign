from .db_manager import DbManager
from .api import ApiManager
import typing as tp
from pydantic import BaseModel
from pydantic_settings import BaseSettings,SettingsConfigDict



class StoreConfigs(BaseSettings):
    model_config = SettingsConfigDict(env_prefix='STORE_',case_sensitive=False)
    url: str = 'sqlite:///db'
    debug: bool = False 
    username: tp.Optional[str] = None
    password: tp.Optional[str] = None
    serve_port: int = 1234

class Store:
    def __init__(self,cfg: StoreConfigs):
        self.cfg = cfg
        self.db = DbManager(cfg.url,debug=cfg.debug)
        self.api = ApiManager(self.db.crud())
        self.api.register_event_api()
        
    def start(self):
        self.api.start_api(self.cfg.serve_port)


        