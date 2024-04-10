from enum import Enum


class Cat:
    def __init__(self, claws: int):
        self.claws = claws


class Dog:
    def __init__(self, woof: bool):
        self.woof = woof


class Animal(Enum):
    cat = Cat
    dog = Dog


print(Animal.cat)
