from enum import Enum
from dataclasses import dataclass
import typing as tp
import logging
from collections import deque
import datetime

class CookieType(str,Enum):
    biskuit='biskuit'
    chocolate='chocolate'
    oats='oats'

class MilkType(str,Enum):
    cow='cow'
    soya='soya'
    choco='choco'
    oat='oat'

@dataclass
class Lunch:
    cookie: tp.Optional[CookieType] = None
    milk: tp.Optional[MilkType] = None


class LunchStorage:
    def __init__(self, capacity=10):
        self.store = deque(maxlen=10)
    
    def add(self, lunch: Lunch):
        logging.info(f'New {lunch=}')
        self.store.append(lunch) 
    
    def consume(self):
        return self.store.pop()


class LunchManager:
    def __init__(self, store: LunchStorage):
        self.store = store

    def form_query(self):
        return Query(self.store)
 
    def give_lunch(self):
        lunch = self.store.consume()
        logging.info(f'New {lunch=}')
        return lunch
               
class Query:
    def __init__(self, store : LunchStorage):
        self.state = Lunch()
        self.store= store
    def set_cookie(self, cookie: CookieType):
        self.state.cookie = cookie
        return self
    def set_milk(self, milk:MilkType):
        self.state.milk = milk
        return self
    def commit(self):
        self.store.add(self.state)
        return self.state

def main():
    man = LunchManager(LunchStorage())
    q = man.form_query()
    print(q)
    cookie=CookieType.chocolate
    milk=MilkType.cow
    assert not(milk=='oat') or cookie=='chocolate' 
    print(q.set_cookie(cookie=cookie).set_milk(milk=milk).commit())
    print(type(q))
    print(man.give_lunch())


main()





