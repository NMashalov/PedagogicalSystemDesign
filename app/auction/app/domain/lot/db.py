from app.db import Base
from sqlalchemy.orm import mapped_column, Mapped, relationship
from sqlalchemy import ForeignKey
from datetime import datetime
from enum import Enum


class StatusType(Enum):
    sold = "sold"
    pending = "pending"
    bidding = "bidding"
    delete = "delete"


class Lot(Base):
    __tablename__ = "lots"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: str
    status: StatusType
    start_dttm: Mapped[datetime]
    end_dttm: Mapped[datetime]
    initial_cost: int
