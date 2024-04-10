from enum import Enum
from .pipeline import Pipe
from .consumer import KafkaConsumer
from .producer import KafkaProducer
from .schema import SchemaRegistry
from .adapter import AdaptSettings
from .base import PromptType, IoType, ProtocolType

    
class KafkaManagerException(Exception):
    pass

class KafkaManager:
    def __init__(self, settings: AdaptSettings):
        self.settings = settings
        self.model = None
        if settings.cfg.registry_url is None:
            self.scheme = SchemaRegistry()

    def return_consumer(self):
        pass
    def return_producer(self):
        Pipe().

    def complete_model(self):
        try: 
            self.model = Pipe().
                Construction().
                require_settings().
                add_serialization().
                set_role().
                debug()
            )
        except Exception as e:
            raise KafkaManagerException() from e



    def direction_solver(self, ):
        if prompt == PromptType.consume:
            return KafkaConsumer(type, protocol)
        elif prompt == PromptType.produce:
             return KafkaProducer(type)
        else:
            raise KafkaManagerException(f'Choose prompt from {PromptType}')
        
    def io_type_solver(self):
        if self.type == IoType.avro:
            SchemaRegistry.from_params().
        elif self.type == IoType.json:

            AdaptSettings()

    def io_from_params(self, prompt: PromptType, type :IoType, protocol: ProtocolType):
        pass
        
       
