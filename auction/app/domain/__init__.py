from enum import Enum
from .auction import AuctionRouter
from .lot import LotRouter
from .user import UserRouter
from ..static import StaticRouter


class Routers(Enum):
    Lot = LotRouter
    Auction = AuctionRouter
    User = UserRouter
    Static = StaticRouter


class CRUD(Enum):
    Lot = LotRouter
    Auction = AuctionRouter
    User = UserRouter
    Static = StaticRouter
