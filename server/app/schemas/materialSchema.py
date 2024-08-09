# file created and coded by Tony Hoong
from pydantic import BaseModel


# this model is used to validate and parse incoming request data for a sign up
class MaterialBase(BaseModel):
    # insert table types


# this model extends the above model and adds any extra fields like primary keys and foreign keys
class Material(MaterialBase):
    id: int
