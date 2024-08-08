# FastAPI backend

Description goes here

<hr>

#### Install:

To run this project on your locally, first clone the repo and enter the folder in your terminal. Now setup a VENV with the command:

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
uvicorn app.main:app --reload

```

The server will now start. The first address is the first API endpoint. The second address is the automatically generated interactive doc.

```
http://127.0.0.1:8000/api
http://127.0.0.1:8000/docs
```

<hr>

##### Tools and technologies used:

-   Python
-   FastAPI
-   SQLAlchemy

```

```
