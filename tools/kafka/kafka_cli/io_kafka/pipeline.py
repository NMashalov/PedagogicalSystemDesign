from kafka_cli.settings import KafkaSettings
from .base import ProtocolType, IoType, RoleType
from .base import AbstractProcessor
from .adapter import SettingsAdapter
from .processor import DeserializerProcessor, SerializerProcessor
from .consumer import KafkaConsumeConn
from .producer import KafkaProduceConn
import json
from dataclasses import dataclass

class PipelineException(Exception):
    pass

class ProcessError(Exception):
    pass


@dataclass
class PipeConfig:
    role: RoleType 
    type :IoType
    protocol: ProtocolType
    topic: str
    
@dataclass
class PipeCtx:
    kafka_cfg: SettingsAdapter
    pipe_cfg: PipeConfig

class ConsumerProcessorStage:
    state: AbstractProcessor

    def __init__(self,ctx : PipeCtx):
        self.ctx = ctx

    def process(self,io : IoType, role : RoleType):
        self.state =  SerializerProcessor.from_io_type(io,self.ctx)

    def next(self):
        if self.state is None:
            raise ProcessError('Process first')
        
        ConsumerProtocolStage.next()


class ConsumerProtocolStage:
    state: KafkaConsumeConn | KafkaProduceConn
    def __init__(self,ctx : PipeCtx, processor: AbstractProcessor):
        self.ctx = ctx
        self.processor = processor
    def process(self):
        if isinstance(self.processor,SerializerProcessor):
            if self.ctx.pipe_cfg.protocol == ProtocolType.plaintext:
                self.state = KafkaProduceConn(
                    self.ctx.kafka_cfg.return_plaintext_producer(),
                    self.processor
                )
            elif self.ctx.pipe_cfg.protocol == ProtocolType.sasl:
                self.state = KafkaProduceConn(
                    self.ctx.kafka_cfg.return_sasl_producer(),
                    self.processor
                )
        elif isinstance(self.processor,SerializerProcessor):
            self.state = KafkaProduceConn(
                    self.ctx.kafka_cfg.return_sasl_producer(),
                    self.processor
                )
        else:
            raise NotImplementedError()

    def make_debug():


class DebugStage:
    state: KafkaConsumeConn | KafkaProduceConn
    def __init__(self,ctx : PipeCtx, processor: AbstractProcessor):
        self.ctx = ctx
        self.processor = processor


    def process(self):
        pass



class Pipe:
    def __init__(self, ctx: PipeCtx):
        self.ctx = ctx

    @classmethod
    def from_pipe_cfg(cls, pipe_cfg: PipeConfig):
        return cls(
            PipeCtx(
                kakfa_cfg=SettingsAdapter.from_cfg(),
                pipe_cfg=pipe_cfg,
            )
        )

    def validate_pipeline(self):
        if (self.ctx.kafka_cfg.username is None or self.ctx.kafka_cfg.password is None) and (self.ctx.pipe_cfg.protocol == ProtocolType.sasl):
            raise PipelineException(f'{ProtocolType.sasl=} requires not none environ KAFKA_USERNAME and KAFKA_PASSWORD')
        elif (self.ctx.kafka_cfg.registry_url is None) and (self.ctx.pipe_cfg.io == IoType.avro):
            raise PipelineException(f'{IoType.avro=} requires registry')
        
    def start(self):            
        return ProcessorStage(self.ctx)



# class Construction:
#     def __init__(self,):
#         self.settings = None
#         self.model = None
#         self.registry
#         KafkaConsumer | KafkaProducer

#     def require_settings(self):
#         self.settings = AdaptSettings
#         return self

#     def add_serialization(self):
#         SchemaRegistry.from_params()
#         return self
    
#     def debug(self, ):
#         self.model
#         AdaptSettings()
#         return self
    
#     def set_role(self): 

#         if 
        
#         SchemaRegistry
#         return self
    
#     def result():
#        pass
