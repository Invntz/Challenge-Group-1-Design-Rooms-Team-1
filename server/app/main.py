from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.designsRouter import router as designsRouter
from app.routers.feedRouter import router as feedRouter

# import the routers. rename them to avoid name conflicts
from app.routers.loginRouter import router as loginRouter
from app.routers.newsRouter import router as newsRouter
from app.routers.signUpRouter import router as signupRouter
from app.routers.uploadsRouter import router as uploadsRouter
from app.routers.userRouter import router as userRouter
from app.routers.wardrobeRouter import router as wardrodeRouter

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
app.include_router(loginRouter, prefix="/api/login")
app.include_router(signupRouter, prefix="/api/signup")
app.include_router(newsRouter, prefix="/api/news")
app.include_router(feedRouter, prefix="/api/feed")
