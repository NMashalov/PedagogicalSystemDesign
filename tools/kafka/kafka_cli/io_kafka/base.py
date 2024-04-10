import abc
from enum import Enum
from dataclasses import dataclass
from confluent_kafka import cimpl
import typing as tp

class RoleType(Enum,str):
    consumer = 'consumer'
    producer = 'producer'

class IoType(Enum,str):
    string = 'string'
    avro = 'avro'
    json = 'json'

class ProtocolType(Enum,str):
    plaintext = 'plaintext'
    sasl = 'sasl'

class AbstractStage:
    state: tp.Optional[tp.Any]
    @abc.abstractmethod
    def process(self):
        pass
    @abc.abstractmethod
    def process(self):
        pass

class AbstractProcessor:
    @abc.abstractmethod
    def proc_msg(self,msg: cimpl):
        pass
    @property
    @abc.abstractmethod
    def type(self) -> IoType:
        pass

class AbstractProcessor:
    io_type: IoType
    role_type: RoleType

    @abc.abstractmethod
    def proc_msg(self,msg: cimpl):
        pass





class AbstractAgent:
    @abc.abstractmethod
    def debug(self):
        pass


