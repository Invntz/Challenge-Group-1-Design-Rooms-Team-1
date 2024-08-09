from fastapi import APIRouter, HTTPException

from app.schemas.signUpSchema import Signup, SignupBase
from app.utils.config import get_db, get_password_hash

# groups all path operations. needed for main.py
router = APIRouter()


@router.post("/")
# signup is the request object that we receive. SignupBase is added as the type to validate the request
def signup_post(signup: SignupBase):
    # establish a connection to the database
    conn = get_db()
    cursor = conn.cursor()
    # run the sql query
    cursor.execute(
        "INSERT INTO user (email, password, firstname, surname) VALUES (?, ?, ?, ?)",
        (
            signup.email,
            get_password_hash(signup.password),
            signup.firstname,
            signup.surname,
        ),
    )
    # save the executions
    conn.commit()
    # this will return status 200, and we've set it to return a JSON object. the success key with the True boolean can be used on the frontend. the message is something that the frontend can then send if they wanted
    return {"success": True, "message": "Signed up successfully"}
