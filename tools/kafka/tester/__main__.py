import argparse
from tester import SaslProducer, SaslConsumer, SaslAdmin
import asyncio


admin = SaslAdmin.from_params(
    url='0.0.0.0:19092',
    username='brocker',
    password='brocker123',
)

admin.create_topic('my_topic')

print(admin.list_topics())



producer = SaslProducer.from_params(
    url='0.0.0.0:19092',
    username='brocker',
    password='brocker123',
)


for i in range(10):
    producer.write_event({f'test_{i}': i},'my_topic') 

consumer = SaslConsumer.from_params(
    url='0.0.0.0:19092',
    username='brocker',
    password='brocker12',
    topic='my_topic'
)
print(consumer.research_positions())
print(consumer.till_end())
