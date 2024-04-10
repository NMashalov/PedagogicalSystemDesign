from confluent_kafka import Consumer, Producer
import requests
from enum import Enum
from .base import ProtocolType, IoType
from kafka_cli.settings import KafkaSettings


class KafkaAdaptException(Exception):
    pass

class SettingsAdapter(KafkaSettings):     
    def return_plaintext_consumer(self):
        return Consumer({
            "auto.offset.reset": "latest",
            "bootstrap.servers": self.cfg.server_url,
        })
    
    def return_plaintext_producer(self):
        return Producer({
            "bootstrap.servers": self.cfg.server_url,
        })
    
    def return_sasl_consumer(self):
        return Consumer({
            "auto.offset.reset": "latest",
            "sasl.username": self.cfg.username,
            "sasl.password":  self.cfg.password,
            "group.id": f"user.topic",
            "bootstrap.servers": self.cfg.server_url,
        })
    
    def return_sasl_producer(self):
        return Producer({
            "sasl.mechanism": "SCRAM-SHA-512",
            "security.protocol": "SASL_SSL",
            "sasl.username": self.cfg.username,
            "sasl.password":  self.cfg.password,
            "bootstrap.servers": self.cfg.server_url,
        })


