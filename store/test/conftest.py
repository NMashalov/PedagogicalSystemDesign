import pytest
import factory
from store.db_model import Event, Type
from sqlalchemy.orm import Session
from store import Store, app
from fastapi.testclient import TestClient


class EventFactory(factory.alchemy.SQLAlchemyModelFactory):
    class Meta:
        model = Event

    datetime = factory.Faker(
        'date_this_month'
    )
    store = factory.Faker(
        'first_name'
    )
    type = factory.Faker(
        'enum',
        enum_cls=Type
    )


@pytest.fixture(scope="session")
def start_app():
    return app()

@pytest.fixture(scope="session")
def session_factory(start_app: Store):
    return start_app.db.return_session()


@pytest.fixture(scope="session")
def set_session_for_factories(session_factory: Session):
    EventFactory._meta.sqlalchemy_session = session_factory


@pytest.fixture(scope="session")
def event_fixture(set_session_for_factories):
    return EventFactory.build_batch(10)


@pytest.fixture(scope="session",autouse=True)
def populate_event_table(session_factory: Session, event_fixture: list[Event]):
    session_factory.add_all(
        event_fixture
    )
    session_factory.commit()


@pytest.fixture(scope="session")
def api_client(start_app: Store):
    return TestClient(app=start_app.api.app)