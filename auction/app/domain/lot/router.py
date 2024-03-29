from pydantic import BaseModel
from fastapi import APIRouter
from .crud import LotCRUD
from app.base import BaseRouter

class Lot(BaseModel):
    name: str
    initial_cost: int
    
class LotRouter(BaseRouter):
    def __init__(self, redis_session):
        self.lot_crud = LotCRUD()
        self.router = APIRouter()

    def register_lot(self):
        @self.router.post('register')
        def lot(lot: Lot):
            self.lot_crud.crete_item(name=lot.name,initial_cost=lot.initial_cost)
            
        @self.router.get("sold/{lot_id}")
        def sold_item():
            self.lot_crud.sold_item(name=lot.name,initial_cost=lot.initial_cost)

