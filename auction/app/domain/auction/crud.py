from redis import Redis
from dataclasses import dataclass, field, asdict
from datetime import datetime
from ...auctions import AbstractAuction
import uuid
from .crud import BidderCRUD


@dataclass
class Bid:
    id: int
    amount: int
    lot_id: int
    auction_id: int
    bidder_id: int
    timestamp: datetime


class AuctionCRUD:
    def __init__(self, session: Redis):
        self.session = session

    @staticmethod
    def bid_to_json(bid: Bid):
        return asdict(bid)

    def register_bid(self, bid: Bid):
        self.session.hmset(bid.id, self.bid_to_json(bid))

    def return_bids(self):
        yield from self.session.scan_iter("auction_id:*")

    def end_auction(self):
        result = self.auction.inference()
        return result

    def clean_bids(self):
        for key in self.session.scan_iter("auction_id:*"):
            self.session.delete(key)
