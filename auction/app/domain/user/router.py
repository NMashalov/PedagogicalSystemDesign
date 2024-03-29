from redis import Redis
from pydantic import BaseModel
from fastapi import FastAPI, APIRouter
from fastapi.staticfiles import StaticFiles
from app.base import BaseRouter
from .crud import UserCRUD

from sqlalchemy.orm import Session
import bcrypt


class LoginForm(BaseModel):
    username: str
    password: str

class UserRouter(BaseRouter):
    def __init__(self,pg_session: Session):
        self.user_crud = UserCRUD()
        self.router = APIRouter()

    def register_api(self):
        @self.router.post('/register')
        def register(form: LoginForm):
            self.user_crud.create_user(
                form.username,
                form.password
            )
            

        @self.router.post('/login')
        def login(login: LoginForm):
            self.user_crud.log
            bcrypt.checkpw(LoginForm.password,)










