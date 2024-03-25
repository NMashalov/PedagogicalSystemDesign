from sqlalchemy.orm import Session
from datetime import datetime
from .db_model import Event, Base, Type
from sqlalchemy.orm import sessionmaker
from datetime import datetime
from sqlalchemy import create_engine


class Crud:
    def __init__(self,session: Session):
        self.session = session  

    def upload_event(
        self, 
        datetime: datetime,
        store: str,
        type: Type
        ):
        event = Event(datetime=datetime, store=store,type=type)
        self.session.add(event)
        self.session.commit()
        return event.id

    def return_event(
        self, 
        id:int
        ):
        return self.session.query(Event).filter(Event.id == id).first()
    
    def delete_event(self):
        pass
    
class DbManager:
    def __init__(self, url:str,debug: bool=False):
        self.engine = create_engine(url,echo=debug)
        Base.metadata.create_all(bind=self.engine )
        self.session_maker = sessionmaker(bind=self.engine)

    def crud(self):
        return Crud(self.return_session())
    
    def return_session(self):
        with self.session_maker() as session:
            return session
    
        