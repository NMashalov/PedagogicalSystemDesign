from confluent_kafka import Consumer
from confluent_kafka.serialization import SerializationContext, MessageField
from kafka_cli.settings import AdaptSettings
from .base import AbstractProcessor, AbstractAgent


class DeserializerProcessor:
    def __init__(self, deserializer):
        self.deserializer = deserializer

    @property
    def type(self):
        pass

    @classmethod
    def from_cfg(cls, ):
        pass

    def deserialize_message(self, payload):
        return self.deserializer(payload.value(), SerializationContext(payload.topic(), MessageField.VALUE))


class KafkaConsumer(AbstractAgent):
    def __init__(self, consumer: Consumer, processor: DeserializerProcessor):
        self.consumer = consumer
        self.processor = processor
    
    @classmethod
    def from_params(cls,):
        return cls(
            processor
        )

    def debug(self):
        pass

    def from_settings(cls,):
        return cls(
            Consumer(AdaptSettings().return_sasl_consumer())
        )