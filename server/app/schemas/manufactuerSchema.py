from pydantic import BaseModel


# this model is used to validate and parse incoming request data for a sign up
class ManufacturerBase(BaseModel):
    # insert table types


# this model extends the above model and adds any extra fields like primary keys and foreign keys
class Manufacturer(ManufacturerBase):
    id: int
