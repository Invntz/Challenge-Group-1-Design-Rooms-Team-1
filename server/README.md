# Invntz Challenge Group 1, Team 1. FastAPI backend

We have created a Python backend using the FastAPI library with Sqlite as the database for this challenge. Sqlite is just for the prototype stage and would have to be replaced in the future with an ORM package like SQLAlchemy which can use MySQL or PostgreSQL. I have chosen not to use SQLAlchemy as despite it being capable of using Sqlite, we're unfamiliar with the ORM method of querying.

Readme created by Tony Hoong

<hr>

#### Install:

To run this project locally, first clone the repo and enter the folder in your terminal. Now setup a Virtual Environment (VENV) with the command:

```
python -m venv venv
```

After that has been created activate the virtual environment by typing in your terminal:

```
venv\Scripts\activate
```

Now to install the project dependencies type:

```
pip install -r requirements.txt
```

Once that is done, you can run the server with this command:

```
uvicorn app.main:app

```

The server will now start. The first address is the first API endpoint. The second address is the automatically generated interactive doc.

```
http://127.0.0.1:8000/api
http://127.0.0.1:8000/docs
```

<hr>

##### Prototype routes

http://127.0.0.1:8000/api/news
http://127.0.0.1:8000/api/feed

##### Tools and technologies used:

-   Python
-   FastAPI
-   Sqlite3
