Mostly inspired by awesome https://habr.com/ru/articles/578916/. See github
https://github.com/KrasnovVitaliy/microservice_in_python

It is splitted in parts. If you want final form check 7 chapter
https://github.com/KrasnovVitaliy/microservice_in_python/tree/main/07_api_gateway


## Setup

Set enviroment using `set_env.sh`

Then start docker compose for bringing 
```bash
docker compose up
```

## Basic Start

https://faust.readthedocs.io/en/latest/userguide/workers.html


```python
import faust

app = faust.App(
    SERVICE_NAME,
    broker=config.get(config_loader.KAFKA_BROKER),
    value_serializer='raw',
    web_host=config.get(config_loader.WEB_HOST),
    web_port=config.get(config_loader.WEB_PORT)
)
```

### Kill


https://faust.readthedocs.io/en/latest/userguide/workers.html#stopping-a-worker
> Shutdown is accomplished using the TERM signal.

```bash
pkill -9 -f 'faust'
```

## Read events



```python
@app.agent(src_data_topic)
async def on_event(stream) -> None:
   async for msg_key, msg_value in stream.items():
       metrics.SRC_DATA_RECEIVED_CNT.inc()
       logger.info(f'Received new pair message {msg_value}')
       serialized_message = json.loads(msg_value)
       for pair_name, pair_value in serialized_message.items():
           logger.info(f"Extracted pair: {pair_name}: {pair_value}")
           metrics.PROCESSED_PAIRS_CNT.inc()
           await processed_data_topic.send(key=msg_key, value=json.dumps({pair_name: pair_value}).encode())
           metrics.PROCESSED_DATA_SENT_CNT.inc()
```

### Aggregation


```python
average_table = app.Table('average', default=dict)
```


### SqlAlchemy

https://faust.readthedocs.io/en/latest/



Note that you should with db that supports AsyncSession

```python
from sqlalchemy.ext.asyncio import AsyncSession
async def save_currency(self, pair_name: str, value: float) -> None:
   async with AsyncSession(self.db_engine) as session:
       async with session.begin():
           logger.info(f"Save currency {pair_name}: {value}")
           currency = Currencies(pair_name=pair_name, value=value)
           session.add(currency)
```


## Serialization

https://faust.readthedocs.io/en/latest/userguide/models.html

Basically

```python
class Point(Record, serializer='json'):
    x: int
    y: int
```


https://github.com/bakdata/faust-avro-serializer


## Monitoring

Prometheus

## Testing

https://faust.readthedocs.io/en/latest/userguide/livecheck.html


## Bonus


### Cron heavily

@app.crontab('0 20 * * *')
async def every_day_at_8_pm():
    print('WAKE UP ONCE A DAY')


### Configloader

Probably you'll love configloader:
https://configloader.readthedocs.io/en/stable/