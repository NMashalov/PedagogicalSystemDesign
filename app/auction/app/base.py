from fastapi import APIRouter


class BaseCRUD:
    def __init__(self, session):
        pass


class BaseRouter:
    def __init__(self, router: APIRouter, crud: BaseCRUD):
        self.router = router
