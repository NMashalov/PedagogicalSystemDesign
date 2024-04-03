from pydantic import BaseModel
from fastapi import APIRouter
from .crud import AuctionCRUD
from redis import Redis
from app.base import BaseRouter


class BidModel(BaseModel):
    bid_id: int
    bidder_id: int


class AuctionRouter(BaseRouter):
    def __init__(self, redis_session: Redis):
        self.auction_crud = AuctionCRUD()
        self.router = APIRouter()

    def register_api(self):
        @self.router.get("/read/{auction_id}")
        def auction_info(auction_id: int):
            self.auction_crud

        @self.router.post("/create/{auction_id}")
        def create_bid(auction_id: int):
            self.auction_crud

        @self.router.post()
        def record_bid(bid: BidModel):
            self.auction_crud
