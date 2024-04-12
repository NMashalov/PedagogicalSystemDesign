from confluent_kafka import Consumer, Producer, TopicPartition
from confluent_kafka.admin import AdminClient, NewTopic
import typing as tp
from confluent_kafka.serialization import StringSerializer, SerializationContext
import json
import logging

def process():
    pass

class SaslAdmin:
    def __init__(self, admin_client: AdminClient):
        self.admin_client= admin_client

    @classmethod
    def from_params(cls, url: str, username: str, password: str):
        return cls(AdminClient({
            "bootstrap.servers": url,
            'security.protocol': 'PLAINTEXT',
            'sasl.mechanism': 'PLAIN',
            "sasl.username": username,
            "sasl.password": password
        }))

    def create_topic(self, topic: str):
        # Number-of-partitions  = 1
        # Number-of-replicas    = 1
        self.admin_client.create_topics([NewTopic(topic, 1, 1)])

    def list_topics(self):
        return self.admin_client.list_topics().topics
    


class SaslProducer:
    def __init__(self, producer: Producer, serializer:  SerializationContext):
        self.producer = producer
        self.serializer = serializer
    
    @classmethod
    def from_params(cls, url: str, username: str, password: str):
        return cls(
            producer = Producer({
                'bootstrap.servers': url,
                'security.protocol': 'PLAINTEXT',
                'sasl.mechanism': 'PLAIN',
                "sasl.username": username,
                "sasl.password": password
            }),
            serializer=StringSerializer()
        )

    def write_event(self, msg: dict, topic: str):
        self.producer.produce(
            topic=topic,
            value=json.dumps(msg),
            on_delivery=lambda _,y: print(_,y.value(),y.topic(), y.offset())
        )
        self.producer.flush(0.5)


class SaslConsumer:
    def __init__(self, consumer: Consumer, deserializer:  StringSerializer,topic:str):
        self.consumer = consumer
        self.topic = topic
        self.deserializer = deserializer

    
    def research_positions(self):
        topic = self.consumer.list_topics(topic=self.topic)
        partitions = [
            TopicPartition(self.topic, partition) 
            for partition in list(topic.topics[self.topic].partitions.keys())
        ]
        print(partitions)
        print(self.consumer.position(partitions))
        
    
    @classmethod
    def from_params(cls, username: str, url: str,password: str, topic: str):
        consumer = Consumer({
            'bootstrap.servers': url,
            "group.id": f'{username}.{topic}.6',
            #'auto.offset.reset': 'earliest',
            #'enable.auto.commit': False
            # "sasl.username": username,
            # "sasl.password": password
        })
        consumer.subscribe(
            [topic], on_assign=lambda x,partions : [
            print(f'Assigned to {p.topic}, partition {p.partition}, offset') for p in partions
            ]
            )
        return cls(
            consumer,
            StringSerializer,
            topic
        )

    def read_event(self):
        try:   
            msg = self.consumer.poll(10).value()
            return msg
        except Exception: 
            logging.warning('err')
        finally:
            self.consumer.close()
        

    def consume_batch(self, n_events= 10):
        try:  
            msgs = []
            for _ in range(n_events):
                msg = self.consumer.poll(10)
                msgs.append(( msg.value(), msg.offset()))
            return msgs
        except Exception: 
            logging.warning('err')
        finally:
            self.consumer.close()

    def till_end(self):
        data = []
        try:
            while True:
                msg = self.consumer.poll(10)
                data.append(( msg.value(), msg.offset()))
        except Exception as e:
            logging.warning('err')
        finally:
            return data
        
        

    