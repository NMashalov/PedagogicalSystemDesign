from .db import User, BidderBalance, UserType
from sqlalchemy.orm import Session
from datetime import datetime


class UserCRUD:
    def __init__(
        self,
        session: Session,
    ):
        self.session = session

    def create_user(self, id: int, name: str, datetime: datetime, type: UserType):
        bidder = User(id=id, name=name, datetime=datetime, type=type)
        self.session.add(bidder)
        self.session.commit()

    def check_auth(self):
        self.session.query(User.name, User.password_hash).filter(User.id == id).first()
