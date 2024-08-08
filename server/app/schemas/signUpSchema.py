from pydantic import BaseModel


class TodoBase(BaseModel):
    title: str
    description: str | None = None


class TodoResponse(TodoBase):
    id: int

    class Config:
        orm_mode = True
