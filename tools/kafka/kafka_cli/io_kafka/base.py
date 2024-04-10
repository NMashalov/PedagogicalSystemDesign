import abc
from enum import Enum
from dataclasses import dataclass

class PromptType(Enum,str):
    consume = 'consume'
    produce = 'produce'

class IoType(Enum,str):
    avro = 'avro'
    json = 'json'

class ProtocolType(Enum,str):
    plaintext = 'plaintext'
    sasl = 'sasl'

@dataclass
class CliConfig:
    prompt: PromptType 
    type :IoType
    protocol: ProtocolType

class AbstractAgent:
    @abc.abstractmethod
    def debug(self):
        pass

class AbstractProcessor:
    @property
    @abc.abstractmethod
    def type(self) -> IoType:
        pass