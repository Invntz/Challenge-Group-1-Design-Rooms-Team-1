from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm

from app.schemas.loginSchema import Login, LoginBase
from app.utils.config import create_access_token, get_db, verify_password

router = APIRouter()


# login function. broken at the moment
@router.post("/")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    try:
        email = form_data.username
        password = form_data.password

        # Check if user exists and verify password
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
        user = cursor.fetchone()
        if not user or not verify_password(password, user["password"]):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Incorrect email or password",
            )
    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while processing your request",
        )
    finally:
        conn.close()

    # Generate access and refresh tokens
    access_token = create_access_token(data={"sub": user["email"]})

    # Return access token
    return {
        "success": True,
        "access_token": access_token,
    }
