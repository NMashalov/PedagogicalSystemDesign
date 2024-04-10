from confluent_kafka.schema_registry import SchemaRegistryClient
from confluent_kafka.schema_registry.avro import AvroSerializer, AvroDeserializer
from confluent_kafka.schema_registry.json_schema import JSONSerializer, JSONDeserializer
from .base import AbstractProcessor


class SchemaException(Exception):
    pass


class SchemaRegistry:
    def __init__(self, client: SchemaRegistryClient):
        self.client = client

    @classmethod
    def from_params(cls, url: str = f"http://kafka"):
        return cls(SchemaRegistryClient({"url": url }))

    def return_avro_serializer(self,):
        try:
            return AvroSerializer(
                self.client,
                self.client.get_schema(),
                lambda x,ctx: x
            )
        except Exception as e:
            raise SchemaException() from e
    
    def return_avro_deserializer(self,):
        return AvroDeserializer(
            self.client,
            self.client.get_schema(),
            lambda x,ctx: x
        )
    
    def return_json_serializer(self):
        return JSONSerializer(

            
        )

    def return_json_deserializer(self):
        return JSONDeserializer
      





