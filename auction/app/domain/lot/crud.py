from sqlalchemy.orm import Session
from sqlalchemy.orm import mapped_column, Mapped, relationship
from sqlalchemy import ForeignKey
from .db import Lot, StatusType


class LotCRUD:
    def __init__(self, session: Session):
        self.session = session

    def crete_item(self, name: str, initial_cost: int):
        item = Lot(name=name, initial_cost=initial_cost)
        self.session.add(item)
        return item.id

    def sold_item(self, id: int):
        lot = self.session.query(Lot).filter(Lot.id == id).first()
        lot.status = StatusType.delete
        self.session.commit()

    def delete_item(self, id: int):
        """
        expire instead of full deleteion
        """
        lot = self.session.query(Lot).filter(Lot.id == id).first()
        lot.status = StatusType.delete
        self.session.commit()
