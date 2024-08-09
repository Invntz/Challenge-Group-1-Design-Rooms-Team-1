# file created by Tony Hoong
from fastapi import APIRouter, HTTPException

from app.tempData import follower_feed

# from app.schemas.
from app.utils.config import get_db

router = APIRouter()


# fetch a feed of products
@router.get("/")
def get_follower_feed():

    return {"success": True, "product_feed": follower_feed}
