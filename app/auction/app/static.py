from fastapi import APIRouter
from fastapi.staticfiles import StaticFiles


class StaticRouter:
    def __init__(self):
        self.app = APIRouter()

    def register(self, api):
        self.app.include_router(api.router)

    def register_static(self):
        self.app.mount("/web", StaticFiles(directory="web"), name="web")
