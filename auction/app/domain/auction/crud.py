from redis import Redis
from dataclasses import dataclass, field, asdict
from datetime import datetime
from ...auctions import AbstractAuction
import uuid
from .crud import BidderCRUD

@dataclass
class Bid:
    id: int = field(default_factory=uuid.uuid4)
    amount: int 
    lot_id: int
    auction_id: int
    bidder_id: int 
    timestamp: datetime






class AuctionCRUD:
    def __init__(self, session : Redis,auction: AbstractAuction):
        self.session = session
        self.auction = auction

    @staticmethod
    def bid_to_json(bid: Bid):
        return asdict(bid)

    def register_bid(self, bid: Bid):
        self.session.hmset(bid.id,  self.bid_to_json(bid))   

    def end_auction(self):
        result = self.auction.inference(
            key for key in self.session.scan_iter("auction_id:*")
        )
        return result 
    def clean_bids(self):
        for key in self.session.scan_iter("auction_id:*"): 
            self.session.delete(key)