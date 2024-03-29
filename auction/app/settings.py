import redis
from .api import ApiManager
from .db import DbManager
import typing as tp
from pydantic import BaseModel
from pydantic_settings import BaseSettings,SettingsConfigDict


class RedisConfig(BaseSettings):
    model_config = SettingsConfigDict(env_prefix='AUCTION_REDIS',case_sensitive=False)
    url : str = '127.0.0.1'
    port: int = 7800


class DBConfig(BaseSettings):
    model_config = SettingsConfigDict(env_prefix='AUCTION_PG_',case_sensitive=False)
    url: str = 'sqlite:///db'
    username: tp.Optional[str] = None
    password: tp.Optional[str] = None
    db_name: tp.Optional[str] = 'auction'

class AuctionConfig(BaseSettings):
    model_config = SettingsConfigDict(env_prefix='AUCTION_',case_sensitive=False)
    debug: bool = False 
    port: int = 1234



class Auction:
    def __init__(self, api_manager: ApiManager, db_manger):
        pass

    @classmethod
    def from_cfg(cls, redis_cfg: RedisConfig, db_cfg: DBConfig):
        redis_session = redis.Redis(host=redis_cfg.url, port=6379, db=0)
        cls(
            ApiManager()
        )

    @staticmethod
    def pg_dsn(db_cfg: DBConfig):
        return f"postgresql+psycopg2://{db_cfg.username}:{db_cfg.password}@{db_cfg.url}:5432/{db_cfg.db_name}"


    def connect_session(self):
        pg_session = sessionmaker()

