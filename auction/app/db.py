from .base import BaseCRUD
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Session
from redis import Redis
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

class Base(DeclarativeBase):
            pass



class DbManager:
    def __init__(self, db_session : Session, redis_session: Redis):
        self.cruds = []

    def start_db(self,url: str, debug: bool):
        self.engine = create_engine(url,echo=debug)
        Base.metadata.create_all(bind=self.engine )
        self.session_maker = sessionmaker(bind=self.engine)

    def register_crud(self, *cruds: BaseCRUD):
        for crud in cruds:
            crud(self.session_maker())

    def provide_crud(self):
        pass 