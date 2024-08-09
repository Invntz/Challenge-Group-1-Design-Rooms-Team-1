from fastapi import APIRouter, HTTPException

# from app.schemas.
from app.utils.config import get_db

router = APIRouter()


# fetch info on the team
@router.get("/")
def get_team():
    teamInfo = [
        {
            "id": 1,
            "title": "Lorem ipsum dolor sit. ",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eligendi autem maiores officia omnis in alias magni labore, iste incidunt!",
            "photos": [
                "https://picsum.photos/id/4/400",
                "https://picsum.photos/id/112/400",
                "https://picsum.photos/id/119/400",
            ],
        },
        {
            "id": 2,
            "title": "Lorem, ipsum dolor.",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias iste eum excepturi ipsam maiores amet molestias quidem! Dignissimos amet hic vel in similique modi eveniet recusandae, neque fuga quibusdam.",
            "photos": [
                "https://picsum.photos/id/128/400",
                "https://picsum.photos/id/182/400",
            ],
        },
        {
            "id": 3,
            "title": "Lorem ipsum dolor sit.",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consequuntur ab voluptas tenetur corporis? Consequatur.",
            "photos": [
                "https://picsum.photos/id/237/400",
                "https://picsum.photos/id/299/400",
                "https://picsum.photos/id/331/400",
            ],
        },
    ]

    return {"success": True, "teamInfo": teamInfo}
