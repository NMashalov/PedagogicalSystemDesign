from pydantic_settings import BaseSettings, SettingsConfigDict
import typing as tp

class KafkaSettings(BaseSettings):
    model_config = SettingsConfigDict(env_prefix='KAFKA', case_sensitive=False)
    server_url: str
    registry_url: tp.Optional[str] = None
    username: tp.Optional[str] = None
    password: tp.Optional[str] = None

'''
username and password are required only for authorization protocols like sasl
envs should KAFKA_SERVER_URL
'''



