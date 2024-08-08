import sqlite3

from passlib.context import CryptContext

DATABASE_URL = "app/sql_app.db"

# use bcrypt to hash and manage password
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


# open a database connection
def get_db():
    conn = sqlite3.connect(DATABASE_URL)
    conn.row_factory = sqlite3.Row  # To get dictionary-like row objects
    return conn


# hash and salt a password
def get_password_hash(password):
    return pwd_context.hash(password)
