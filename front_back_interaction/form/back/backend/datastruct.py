from dataclasses import dataclass
import factory 
import random
import datetime


@dataclass
class Event:
    payload: dict[str,str]
    created_dttm: datetime.datetime
    score: float

    

class FakeEvent(factory.Factory):
    class Meta:
        model = Event

    payload = factory.Faker('pydict')
    created_dttm = factory.LazyFunction(datetime.datetime.now)
    score = factory.LazyFunction(random.random)


if __name__ == "__main__":
    print(FakeEvent.build_batch(10))