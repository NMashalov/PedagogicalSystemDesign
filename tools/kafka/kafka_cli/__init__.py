import typer
from .io_kafka.producer import EventProducer
from .event.factory import EventFactory

app = typer.Typer()


@app.command('mock_produce')
def mock_produce(topic: str):
    events = EventFactory.build_batch(10)
    EventProducer.from_cfg().produce_batch(events)

@app.command('produce')
def produce(topic: str):
    pass
    #EventProducer()


@app.command('consume')
def consume(topic: str):
    pass