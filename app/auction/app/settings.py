import redis
from .api import ApiManager
from .db import DbManager
import typing as tp
from pydantic import BaseModel
from pydantic_settings import BaseSettings, SettingsConfigDict


class RedisConfig(BaseSettings):
    model_config = SettingsConfigDict(env_prefix="AUCTION_REDIS", case_sensitive=False)
    url: str = "127.0.0.1"
    port: int = 7800
    db_name: str = 'auction'


class DBConfig(BaseSettings):
    model_config = SettingsConfigDict(env_prefix="AUCTION_PG_", case_sensitive=False)
    url: str = "sqlite:///db"
    username: tp.Optional[str] = None
    password: tp.Optional[str] = None
    db_name: tp.Optional[str] = "auction"


class AuctionConfig(BaseSettings):
    model_config = SettingsConfigDict(env_prefix="AUCTION_", case_sensitive=False)
    debug: bool = False
    port: int = 1234


class SettingsManager:
    def __init__(
        self, redis_cfg: RedisConfig, db_cfg: DBConfig, auction_cfg: AuctionConfig
    ):
        self.redis_cfg = redis_cfg
        self.db_cfg = db_cfg
        self.auction_cfg = auction_cfg

    @classmethod
    def init_cfg():
        return SettingsManager(
            redis_cfg=RedisConfig(), db_cfg=DBConfig(), auction_cfg=AuctionConfig()
        )


class AuctionApp:
    def __init__(self, api_manager: ApiManager, db_manger):
        pass

    @classmethod
    def from_cfg(cls, app_setting: SettingsManager):
        ApiManager(
            redis_session = redis.Redis(
                host=app_setting.redis_cfg.url,
                port=app_setting.redis_cfg.port,
                db=app_setting.redis_cfg.db_name,
            )
        )
        cls()

    @staticmethod
    def pg_dsn(db_cfg: DBConfig):
        return f"postgresql+psycopg2://{db_cfg.username}:{db_cfg.password}@{db_cfg.url}:5432/{db_cfg.db_name}"

    def connect_session(self):
        pg_session = sessionmaker()
