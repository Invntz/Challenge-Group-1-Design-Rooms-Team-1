# file created and coded by Tony Hoong
from pydantic import BaseModel


# this model is used to validate and parse incoming request data for a sign up
class UserBase(BaseModel):
    email: str
    password: str
    firstname: str
    surname: str


# this model extends the above model and adds any extra fields like primary keys and foreign keys
class User(UserBase):
    id: int
