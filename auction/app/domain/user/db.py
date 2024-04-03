from app.db import Base
from sqlalchemy.orm import mapped_column, Mapped, relationship
from sqlalchemy import ForeignKey
from datetime import datetime
from enum import Enum


class UserType(Enum):
    admin = "admin"
    bidder = "bidder"


class User(Base):
    __tablename__ = "user"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    password_hash: Mapped[str]
    type: UserType


class BidderBalance(Base):
    __tablename__ = "bidder_balance"
    id: Mapped[int] = mapped_column(primary_key=True)
    bidder_id = mapped_column(ForeignKey("user.id"))
    datetime: Mapped[datetime]
    balance: Mapped[int]
