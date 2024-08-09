# file created by Tony Hoong
from fastapi import APIRouter, HTTPException

from app.tempData import teamInfo

# from app.schemas.
from app.utils.config import get_db

router = APIRouter()


# fetch info on the team
@router.get("/")
def get_team():
    teamInfo

    return {"success": True, "teamInfo": teamInfo}
