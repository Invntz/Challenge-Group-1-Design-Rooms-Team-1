from app.utils.config import get_db
from app.schemas.signUpSchema import SignupBase, Signup


from fastapi import APIRouter, HTTPException

# from app.schemas.loginSchema import

router = APIRouter()

@router.post("/")
def signup_post(signup: SignupBase):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(
        'INSERT INTO user (email, password, firstname, surname) VALUES (?, ?, ?, ?)',
        (signup.email, signup.password, signup.firstname, signup.surname)
    )
    conn.commit()
    return {
        'success': True, 'message': 'Signed up successfully'
    }