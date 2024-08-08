from pydantic import BaseModel


class LoginBase(BaseModel):
    username: str
    password: str


class Login(LoginBase):
    id: int

    class Config:
        orm_mode = True
