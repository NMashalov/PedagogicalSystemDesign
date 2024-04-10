from confluent_kafka import Consumer
from confluent_kafka import cimpl

from .adapter import AdaptSettings, De
from .base import AbstractAgent




class KafkaConsumeConn(AbstractAgent):
    def __init__(self, consumer: Consumer, processor: DeserializerProcessor):
        self.consumer = consumer
        self.processor = processor

    def read_n_msg(self, n: int, topic: str):
        for _ in range(n):
            self.consumer.poll()

    def research_positions(self):
        topic = self.consumer.list_topics(topic='topicName')
        partitions = [
            TopicPartition('topicName', partition) for partition in list(topic.topics['topicName'].partitions.keys())]
    
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