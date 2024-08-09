from fastapi import APIRouter, HTTPException

# from app.schemas.
from app.utils.config import get_db

router = APIRouter()


# fetch a single user
@router.get("/{id}")
def get_user(id: int):
    return


# update a single user
@router.put("/{id}")
def update_user(id: int):
    return


# delete a user
@router.delete("/{id}")
def delete_user(id: int):
    return
