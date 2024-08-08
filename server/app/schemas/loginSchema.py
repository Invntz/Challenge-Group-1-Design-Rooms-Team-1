from pydantic import BaseModel


# this model is used to validate and parse incoming request data for a login
class LoginBase(BaseModel):
    username: str
    password: str


# this model extends the above model and adds an 'id' field
class Login(LoginBase):
    id: int

    class Config:
        orm_mode = True
