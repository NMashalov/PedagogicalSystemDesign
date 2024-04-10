from confluent_kafka.schema_registry import SchemaRegistryClient
from confluent_kafka.schema_registry.avro import AvroSerializer, AvroDeserializer
from .base import IoType


class SchemaRegistry:
    def __init__(self, client: SchemaRegistryClient):
        self.client = client

    @classmethod
    def from_params(cls, url: str = f"http://kafka"):
        return cls(SchemaRegistryClient({"url": url }))

    def return_avro_serializer(self,):
        return AvroSerializer(
            self.client,
            self.client.get_schema(),
            lambda x,ctx: x
        )
    
    def return_avro_deserializer(self,):
        return AvroDeserializer(
            self.client
        )
      





