from sqlalchemy.orm import DeclarativeBase
from fastapi import APIRouter
from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass

class BaseCRUD:
    def __init__(self, session):
        pass

class BaseRouter:
    def __init__(self, router: APIRouter, crud:  BaseCRUD):
        self.router = router
    

    


