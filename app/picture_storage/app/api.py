import fastapi


class API:
    def __init__(self):
        self.app = fastapi.FastAPI()
    def enable_picture_api(self):
        @self.app.get('picture/{id}')
        def return_picture(id:int):
            pass