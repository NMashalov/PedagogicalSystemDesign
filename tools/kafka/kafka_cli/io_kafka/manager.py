from enum import Enum
from .consumer import KafkaConsumer
from .producer import KafkaProducer
from .schema import SchemaRegistry
from .adapter import AdaptSettings
from .base import PromptType, IoType, ProtocolType



class Construction:
    def __init__(self,):
        self.settings = None
        self.model = None
        self.registry
        KafkaConsumer | KafkaProducer

    def require_settings(self):
        self.settings = AdaptSettings
        return self

    def add_serialization(self):
        SchemaRegistry.from_params()
        return self
    
    def debug(self, ):
        self.model
        AdaptSettings()
        return self
    
    def set_role(self): 

        if 
        
        SchemaRegistry
        return self
    
    def result():
       pass
    
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
        pass

    def complete_model(self):
        try: 
            self.model = (
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
        
       
