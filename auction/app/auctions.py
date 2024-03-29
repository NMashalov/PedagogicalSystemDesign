import abc

class Item:
    init_price: int
    time:int
    item: int
    bidders: int

class AbstractAuction:
    def __init__(self, item: Item):
        self.time = item.time
        self.init_price = item.init_price

    def show_price(self):
        pass
    
    @abc.abstractmethod
    def solver(self,bids) -> int:
        pass

    def inference(self,bids:int):
        return self.solver()

class FirstBidAuction:
    def __init__(self, time:int):
        self.time = time


    def inference(self):
        return result_price
    

class SecondBidAuction:
    def __init__(self, time:int):
        self.time = time
        self.bids = bids

    def solver(self, bids):
        return 

    def inference(self):
        return result_price
    

auction_types = {
    "first_bid": FirstBidAuction,
    "second_bid": SecondBidAuction,
}