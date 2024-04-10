from confluent_kafka import Producer, Consumer
from confluent_kafka.serialization import StringSerializer
import typing as tp


class SaslProdcuer:
    def __init__(self, consumer: tp.Optional[Consumer] = None):
        self.consumer = consumer

    @classmethod
    def from_params(self,username: str, password: str, topic: str):
        cons = Consumer({
            "auto.offset.reset": "latest",
            "group.id": f"user.topic",
            "bootstrap.servers": self.cfg.server_url,
        })
        cons.subscribe([topic])

    def produce_batch(self, batch_size: 10, poll_timeout: int =5):



class SaslConsumer:
    def __init__(self, consumer: tp.Optional[Consumer] = None, ser):
        self.consumer = consumer

    @classmethod
    def from_params(self,username: str, password: str, topic: str):
        cons = Consumer({
            "auto.offset.reset": "latest",
            "group.id": f"user.topic",
            "bootstrap.servers": self.cfg.server_url,
        })
        cons.subscribe([topic])

    def read_batch(self, batch_size: 10, poll_timeout: int =5):

        