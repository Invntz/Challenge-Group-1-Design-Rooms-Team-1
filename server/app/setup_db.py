import sqlite3

connection = sqlite3.connect("sql_app.db")
cursor = connection.cursor()

cursor.execute(
    """
CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(30) NOT NULL,
    firstname VARCHAR(30) NOT NULL,
<<<<<<< HEAD
    surname VARCHAR(30) NOT NULL,
=======
    surname VARCHAR(30) NOT NULL
>>>>>>> e1f70bfd746e91a1a477fcc30e38e32f6957b8bf
)
"""
)


connection.commit()
connection.close()
