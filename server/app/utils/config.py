import sqlite3

DATABASE_URL = "app/sql_app.db"


def get_db():
    conn = sqlite3.connect(DATABASE_URL)
    conn.row_factory = sqlite3.Row  # To get dictionary-like row objects
    return conn
