from store.db_model import Event, Type
from store import main, Store
from sqlalchemy.orm import Session
import pytest
from fastapi.testclient import TestClient
from conftest import EventFactory



def event_to_json(event: Event):
    return {
        'id': event.id,
        'datetime': event.datetime.isoformat(),
        'store': event.store,
        'type': event.type.value
    }


def request(event_json,response):
    {k: event_json[k] for k in event_json if k in response.json() and event_json[k] == response.json()[k]} 



@pytest.fixture
def api_client(start_app: Store):
    return TestClient(app=start_app.api.app)


@pytest.mark.parametrize(
    "param",
    [1,7]
)
def test_check(api_client: TestClient,param: int, event_fixture: list[Event]):
    event_json = event_to_json(event_fixture[param])
    response = api_client.get(f"/check/{ event_json['id']}")
    assert response.status_code == 200
    assert response.json() == event_json, (response.json(),event_json) 

def test_upload(api_client: TestClient, populate_event_table):
    event: Event = EventFactory.create()
    j = {
            "datetime": str(event.datetime),
            "store": event.store,
            "type": event.type.value
    }
    response = api_client.post(
        "/upload",
        json=j
    )
    assert response.status_code == 200
    assert response.json() == 11, (response.json())








