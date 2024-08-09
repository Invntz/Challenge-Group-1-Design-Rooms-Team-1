# file created by Tony Hoong
# classes filled by Cara McCrossan
from pydantic import BaseModel


# this model is used to validate and parse incoming request data for a sign up
class SignupBase(BaseModel):
    email: str
    password: str
    firstname: str
    surname: str


# this model extends the above model and adds any extra fields like primary keys and foreign keys
class Signup(SignupBase):
    id: int

    class Config:
        orm_mode = True
