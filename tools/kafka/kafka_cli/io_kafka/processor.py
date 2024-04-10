from .base import AbstractProcessor, IoType, RoleType
from .schema import SchemaRegistry
from confluent_kafka import cimpl
from confluent_kafka.schema_registry.avro import AvroSerializer, AvroDeserializer
from confluent_kafka.schema_registry.json_schema import JSONSerializer, JSONDeserializer
from confluent_kafka.serialization import StringSerializer, StringDeserializer
from confluent_kafka.serialization import SerializationContext, MessageField
import json

class SerializerProcessor(AbstractProcessor):
    
    role_type = RoleType.producer

    def __init__(self, serializer: AvroSerializer , io_type = IoType.avro):
        self.serializer = self.serializer

    @classmethod
    def from_io_type(cls, io : IoType, url: str):
        if io == IoType.avro:
            return cls(AvroSerializer(
                    SchemaRegistry.from_params(url).return_avro_serializer()
                )
            )
        elif io == IoType.json:
            return cls(
                JSONSerializer(
                    SchemaRegistry.from_params(url).return_avro_serializer()
                )
            )
        elif io == IoType.string:
            return cls(StringSerializer())
        else:
            raise NotImplementedError()
    
    def ser_msg(self, msg_dict: dict, topic: str):
        return self.serializer(
            msg_dict,
            SerializationContext(
                topic,
                MessageField.VALUE
            )
        )   

class DeserializerProcessor(AbstractProcessor):
    
    role_type = RoleType.consumer

    def __init__(self, deserializer: AvroDeserializer):
        self.deserializer = deserializer
    
    @classmethod
    def from_io_type(cls, io : IoType, url: str):
        if io == IoType.avro:
            return cls(AvroDeserializer(
                    SchemaRegistry.from_params(url).return_avro_serializer()
                )
            )
        elif io == IoType.json:
            return cls(
                JSONDeserializer(
                    SchemaRegistry.from_params(url).return_avro_serializer()
                )
            )
        elif io == IoType.string:
            return cls(StringDeserializer())
        else:
            raise NotImplementedError()



    def deser_msg(self, payload: cimpl):
        return self.deserializer(
            payload.value(),
            SerializationContext(
                payload.topic(), MessageField.VALUE
            )
        )


# class JsonSerializer(AbstractProcessor):
#     io_type = IoType.avro
#     role_type = RoleType.consumer
#     def __init__(self,serializer: StringDeserializer):
#         self.serializer = self.serializer

#     def proc_msg(self, msg: dict, topic: str):
#         return self.serializer(
#             json.dumps(msg),
#             SerializationContext(
#                 topic, MessageField.VALUE
#             )
#         )
        
# class JsonDeserializer(AbstractProcessor):
#     def __init__(self, deserializer: StringSerializer):
#         self.deserializer = deserializer

#     def proc_msg(self,msg: cimpl):
#         return json.loads(self.deserializer(
#             msg.value(),
#             SerializationContext(
#                msg.topic(), MessageField.VALUE
#             )
#         ))
