from pydantic import BaseModel


# this model is used to validate and parse incoming request data for a sign up
class ProductBase(BaseModel):
    # insert table types


# this model extends the above model and adds an 'id' field
class Product(ProductBase):
    id: int
