import typing as tp
import functools


def chain(func):
    @functools.wraps(func)
    def _chain(self):
        func(self)
        return self
    return _chain

class Cat:
    def __init__(self):
        pass

    def meow(self):
        print('meow')
        return self


Cat().meow().meow()