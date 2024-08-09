# file created and coded by Tony Hoong

from fastapi import APIRouter, HTTPException

from app.tempData.landingPage import product_categories, sidenav

# from app.schemas.
from app.utils.config import get_db

router = APIRouter()


# fetch a single user
@router.get("/productCategories")
def get_user():
    product_categories
    return {"success": True, "data": "product_categories"}


# fetch a feed of products
@router.get("/sidenav")
def get_sidenav():
    sidenav

    return {"success": True, "data": sidenav}


@router.get("/products")
def get_products():
    sidenav

    return {"success": True, "data": sidenav}
