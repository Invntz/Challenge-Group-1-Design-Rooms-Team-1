from pydantic import BaseModel


# this model is used to validate and parse incoming request data for a sign up
class SignupBase(BaseModel):
    email: str
    password: str
    firstname: str
    surname: str


# this model extends the above model and adds an 'id' field
class Signup(SignupBase):
    id: int
