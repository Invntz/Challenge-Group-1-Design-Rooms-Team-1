# file created and coded by Tony Hoong
from fastapi import APIRouter, HTTPException

from app.tempData import product_feed

# from app.schemas.
from app.utils.config import get_db

router = APIRouter()


# fetch a feed of products
@router.get("/")
def get_product_feed():
    product_feed

    return {"success": True, "product_feed": product_feed}


# update a single user
@router.put("/{id}")
def update_user(id: int):
    return


# delete a user
@router.delete("/{id}")
def delete_user(id: int):
    return
