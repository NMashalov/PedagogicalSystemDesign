import app.faust as faust

app = faust.App(
    SERVICE_NAME,
    broker=config.get(config_loader.KAFKA_BROKER),
    value_serializer='raw',
    web_host=config.get(config_loader.WEB_HOST),
    web_port=config.get(config_loader.WEB_PORT)
)