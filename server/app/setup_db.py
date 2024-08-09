import sqlite3

# establish sqlite connection
connection = sqlite3.connect("sql_app.db")
# database object to interactive with the database
cursor = connection.cursor()

# user table creation
cursor.execute(
    """
CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(30) NOT NULL,
    firstname VARCHAR(30) NOT NULL,
    surname VARCHAR(30) NOT NULL
)
"""
)

# save any executed commands
connection.commit()
# close the database connection
connection.close()
