#import metrics
from fastapi import FastAPI
from starlette_exporter import PrometheusMiddleware, handle_metrics
import uvicorn

from prometheus_client import Counter
GET_CURRENCIES_CNT = Counter("get_currencies", "The number of get currencies request")
GET_AVERAGE_CNT = Counter("get_average", "The number of get average request")
GET_COUNT = Counter("get_count", "Counter")

app = FastAPI(title="Metrics Collector")

app.add_middleware(PrometheusMiddleware)
app.add_route("/metrics", handle_metrics)

COUNTER = 0

@app.get("/count")
async def get_currencies():
    global COUNTER
    GET_COUNT.inc()
    COUNTER +=1
    return COUNTER

@app.get("/cur")
async def get_currencies(pair_name: str, limit: int = 10):
    GET_CURRENCIES_CNT.inc()
    return 5


@app.get("/avg")
async def get_average():
    GET_AVERAGE_CNT.inc()
    return 3

