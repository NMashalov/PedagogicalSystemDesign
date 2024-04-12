from ..event.factory import EventFactory
from dataclasses import dataclass

from confluent_kafka import Producer
from confluent_kafka.avro import AvroConsumer
from .adapter import SettingsAdapter
from .base import AbstractProcessor, AbstractAgent
from .processor import SerializerProcessor
from confluent_kafka.schema_registry.avro import AvroSerializer
import typing as tp
from .base import ProtocolType, IoType


 

class KafkaProduceConn(AbstractAgent):
    def __init__(self,producer:Producer, processor: SerializerProcessor):
        self.producer = producer
        self.processor = processor




    @classmethod
    def from_cfg(cls, scheme_url: str, protocol_type: ProtocolType, IoType: IoType):
        return cls(
            Producer(config=SettingsAdapter().return_plaintext_producer(),
            SerializerProcessor.from_io_type(IoTypeurl=scheme_url)
        )

    def produce_msg(self,):
    

    def produce_batch(self,batch: tp.Iterator[dict]):
        for event in batch:
            self.producer.produce(event)

        