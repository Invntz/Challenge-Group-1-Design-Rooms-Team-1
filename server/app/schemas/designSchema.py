from pydantic import BaseModel


# this model is used to validate and parse incoming request data for a sign up
class DesignBase(BaseModel):
    # insert table types


# this model extends the above model and adds any extra fields like primary keys and foreign keys
class Design(DesignBase):
    id: int
