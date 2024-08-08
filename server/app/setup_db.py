import sqlite3

connection = sqlite3.connect("sql_app.db")
cursor = connection.cursor()

cursor.execute(
    """
CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT
)
"""
)


connection.commit()
connection.close()
