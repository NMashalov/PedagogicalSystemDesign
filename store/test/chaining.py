import typing as tp
import functools
from collections import OrderedDict



'''
Functor is a class as it has a state
'''

T = tp.TypeVar('T')
U = tp.TypeVar('U')

class Functor(tp.Generic[T]):
    def __init__(self, value: T):
        self.value = value

    def map(self, f: tp.Callable[[T], U]) -> "Functor[U]":
        return Functor(f(self.value))


def add_1(x: int) -> int:
    return x + 1

def square(x: int) -> int:
    return x * x

class LogFunctor(tp.Generic[T]):
    def __init__(self, value: T, log: str):
        self.value = value
        self.log = ''

    def map(self, f: tp.Callable[[T], U]) -> "Functor[U]":
        return Functor(
            value = f(self.value),
            log = self.log'
        )



class Maybe(tp.Generic[T]):
    def __init__(self, value: T | None):
        self.value = value

    def map(self, f: tp.Callable[[T], U]) -> "Maybe[U]":
        if self.value is None:
            return self
        return Maybe(f(self.value))


class Processor:
    def __init__(self):
        pass

    def process(self):        
        return {
            'log': 'processed',
            'value': ''
        }

class Cat:
    def __init__(self):
        OrderedDict()

    def meow(self):
        print('meow')
        return self


Cat().meow().meow()