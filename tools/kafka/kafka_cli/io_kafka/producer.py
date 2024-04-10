from ..event.factory import EventFactory
from dataclasses import dataclass
from confluent_kafka.serialization import StringSerializer, SerializationContext
from confluent_kafka import Producer
from confluent_kafka.avro import AvroConsumer
from .adapter import AdaptSettings
from .base import AbstractProcessor, AbstractAgent, ProtocolType
from confluent_kafka.schema_registry.avro import AvroSerializer
import typing as tp


class SerializerProcessor(AbstractProcessor):
    def __init__(self, serializer: StringSerializer | AvroSerializer):
        self.serializer = self.serializer
    
    def msg(self):
        return self.serializer()

    

class KafkaProducer(AbstractAgent):
    def __init__(self,producer:Producer):
        self.producer = producer

    @classmethod
    def from_cfg(cls, protocol: ProtocolType):
        return cls(Producer(config={
            AdaptSettings().return_plaintext_producer()
        }))

    def produce_batch(self,batch: tp.Iterator):
        for event in batch:
            self.producer.produce(event)

        