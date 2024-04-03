from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import mapped_column, Mapped
from datetime import datetime
from enum import Enum
from sqlalchemy.ext.declarative import declarative_base


class Base(DeclarativeBase):
    pass


class Type(Enum):
    person = "person"
    friend = "friend"


class Event(Base):
    __tablename__ = "event"
    id: Mapped[int] = mapped_column(primary_key=True)
    datetime: Mapped[datetime]
    store: Mapped[str]
    type: Mapped[Type]
