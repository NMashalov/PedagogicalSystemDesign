from fastapi import FastAPI, APIRouter
from domain import Routers
from .base import BaseRouter


class ApiManager:
    def __init__(self):
        self.app = FastAPI()

    def register_health(self):
        @self.app.get("/health")
        def health():
            return {"Health": "Ok!"}

    def atomic_calls(self):
        pass

    def register_basic_routers(r: Routers):
        pass

    def register(self, *routers: BaseRouter):

        for router in routers:
            self.app.include_router(router.router)
