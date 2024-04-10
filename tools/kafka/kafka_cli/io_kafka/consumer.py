from confluent_kafka import Consumer
from confluent_kafka import cimpl
from confluent_kafka.serialization import SerializationContext, MessageField
from .adapter import AdaptSettings
from .base import AbstractAgent




class KafkaConsumeConn(AbstractAgent):
    def __init__(self, consumer: Consumer, processor: DeserializerProcessor):
        self.consumer = consumer
        self.processor = processor

    def read_n_msg(self, n: int, topic: str):
        for _ in range(n):
            self.consumer.poll()
    
    @classmethod
    def from_settings(cls,):
        Consumer(
            AdaptSettings
        )
        return cls(
            processor
        )

    def debug(self):
        pass

    def from_settings(cls,):
        return cls(
            Consumer(AdaptSettings().return_sasl_consumer())
        )