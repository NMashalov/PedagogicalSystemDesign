
import requests
from enum import Enum
from .manager import ProtocolType, IoType
from kafka_cli.settings import KafkaSettings


class KafkaAdaptException(Exception):
    pass


class AdaptSettings:
    def __init__(self):
        self.cfg = KafkaSettings()

    @classmethod
    def validate(cls, protocol: ProtocolType, io: IoType):
        settings = cls()
        if (settings.cfg.username is None or settings.cfg.password is None) and (protocol == ProtocolType.sasl):
            raise KafkaAdaptException(f'{ProtocolType.sasl=} requires not none environ KAFKA_USERNAME and KAFKA_PASSWORD')
        elif (settings.cfg.registry_url is None) and (io == IoType.avro):
            raise KafkaAdaptException(f'{IoType.avro=} requires registry')
        else:
            return settings
        
    def return_plaintext_consumer(self):
        return {
            "auto.offset.reset": "latest",
        }
    
    def return_plaintext_producer(self):
        return {

        }
    
    def return_sasl_consumer(self):
        return {
            "auto.offset.reset": "latest",
            "group.id": f"user.topic"
        }
    
    def return_sasl_producer(self):
        return {
            "sasl.mechanism": "SCRAM-SHA-512",
            "security.protocol": "SASL_SSL",
            "sasl.username": self.cfg.username,
            "sasl.password":  self.cfg.password,
            "bootstrap.servers": ""
        }


