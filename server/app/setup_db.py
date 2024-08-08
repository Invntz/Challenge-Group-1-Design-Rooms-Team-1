import sqlite3

connection = sqlite3.connect("sql_app.db")
cursor = connection.cursor()

cursor.execute(
    """
CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(30) NOT NULL
    firstname VARCHAR(30) NOT NULL
    surname VARCHAR(30) NOT NULL
)
"""
)


connection.commit()
connection.close()
