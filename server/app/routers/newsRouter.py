from fastapi import APIRouter, HTTPException

# from app.schemas.
from app.utils.config import get_db

router = APIRouter()


# fetch latest news
@router.get("/")
def get_news():
    # temporary news feed
    news_feed = [
        {
            "id": 1,
            "title": "Global Markets Rally as Tech Stocks Surge",
            "description": "Tech stocks led the global market surge today, with major indices hitting record highs. Analysts attribute the rise to strong earnings reports and optimism about future growth.",
            "date": "2024-08-09",
            "author": "Jane Doe",
            "url": "https://news.example.com/global-markets-rally",
        },
        {
            "id": 2,
            "title": "New Climate Agreement Reached at Global Summit",
            "description": "World leaders have reached a historic agreement aimed at reducing global carbon emissions. The agreement sets ambitious targets for renewable energy adoption and emissions reduction.",
            "date": "2024-08-08",
            "author": "John Smith",
            "url": "https://news.example.com/climate-agreement-reached",
        },
        {
            "id": 3,
            "title": "Breakthrough in Cancer Research Offers New Hope",
            "description": "Scientists have developed a new treatment that shows promise in the fight against cancer. Early trials suggest the treatment could be more effective and less harmful than current options.",
            "date": "2024-08-07",
            "author": "Emily Johnson",
            "url": "https://news.example.com/cancer-research-breakthrough",
        },
    ]

    return {"success": True, "news": news_feed}


@router.get("/{id}")
def get_single_news(id: int):
    return


# update a news piece
@router.put("/{id}")
def update_user(id: int):
    return


# delete a piece of news
@router.delete("/{id}")
def delete_user(id: int):
    return
