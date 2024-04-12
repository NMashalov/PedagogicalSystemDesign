#https://factoryboy.readthedocs.io/en/stable/examples.html
import factory
from .event import datamodel


class EventFactory(factory.Factory):
    class Meta:
        model = datamodel.Event

    payload = factory.Faker('name')
    datetime= factory.Faker('datetime')