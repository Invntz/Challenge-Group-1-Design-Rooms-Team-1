from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.loginRouter import router as login_router

app = FastAPI()

# Cross Origin Resource Sharing. Need to set this if the frontend and backend are on different servers.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["Content-Type", "Authorization"],
)

# Register the router
app.include_router(login_router, prefix="/api")
