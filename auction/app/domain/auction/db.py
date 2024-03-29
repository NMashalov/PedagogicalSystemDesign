from app.db import Base
from sqlalchemy.orm import  mapped_column, Mapped, relationship
from sqlalchemy import ForeignKey
from datetime import datetime
from enum import Enum

class Auction(Base):
    __tablename__ = 'event'
    id: Mapped[int] = mapped_column(primary_key=True)
    start_dttm: Mapped[datetime]
    end_dttm: Mapped[datetime]
    winner_id: Mapped[str] = mapped_column(ForeignKey("bidders.id"))
    bid_amount: Mapped[int]