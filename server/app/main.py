# coding setup created by Tony Hoong
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.designsRouter import router as designsRouter
from app.routers.feedRouter import router as feedRouter

# import the routers. rename them to avoid name conflicts
from app.routers.loginRouter import router as loginRouter
from app.routers.newsRouter import router as newsRouter
from app.routers.signUpRouter import router as signupRouter
from app.routers.teamRouter import router as teamRouter

# needed to use FastAPI
app = FastAPI()


# Cross Origin Resource Sharing. Need to set this if the frontend and backend are on different servers.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["Content-Type", "Authorization"],
)

# Register the routers

# router added by Cara McCrossan
app.include_router(signupRouter, prefix="/api/signup")
# routers added by Tony Hoong
app.include_router(loginRouter, prefix="/api/login")
app.include_router(newsRouter, prefix="/api/news")
app.include_router(feedRouter, prefix="/api/feed")
app.include_router(loginRouter, prefix="/api/login")
app.include_router(teamRouter, prefix="/api/team")
