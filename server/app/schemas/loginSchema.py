# file created and coded by Tony Hoong
from pydantic import BaseModel

# this isn't needed? due to how fastapi authenticates users?


# this model is used to validate and parse incoming request data for a login
class LoginBase(BaseModel):
    username: str
    password: str


# this model extends the above model and adds an 'id' field
class Login(LoginBase):
    id: int

    class Config:
        orm_mode = True
