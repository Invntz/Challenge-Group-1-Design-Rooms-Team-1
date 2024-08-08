from pydantic import BaseModel


class SignupBase(BaseModel):
    email: str
    password: str
    firstname: str
    surname: str


class Signup(SignupBase):
    id: int

    class Config:
        orm_mode = True
