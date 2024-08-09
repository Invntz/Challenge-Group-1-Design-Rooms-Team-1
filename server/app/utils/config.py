# file created and coded by Tony Hoong
import os
import sqlite3
from datetime import datetime, timedelta, timezone
from typing import Optional

import jwt
from dotenv import load_dotenv
from passlib.context import CryptContext

# loads up .env file
load_dotenv()

# set the location of the sqlite database
DATABASE_URL = "app/sql_app.db"

# use bcrypt to hash and manage password
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


# jwt stuff. secret generated with:
# openssl rand -hex 32
JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60


# function to open a database connection
def get_db():
    conn = sqlite3.connect(DATABASE_URL)
    conn.row_factory = sqlite3.Row  # To get dictionary-like row objects
    return conn


# hash and salt a password
def get_password_hash(password):
    return pwd_context.hash(password)


# verify the user inputted password to a hashed password
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


# create the access token
def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(
            minutes=ACCESS_TOKEN_EXPIRE_MINUTES
        )
    # to_encode.update({"exp": expire})
    to_encode["exp"] = expire
    # Set the issued at time
    to_encode["iat"] = datetime.now(timezone.utc)
    encoded_jwt = jwt.encode(to_encode, JWT_SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt
