from fastapi import APIRouter
from src.prisma import prisma

router = APIRouter()


@router.get("/weather-records")
async def get_weather_records():
    weather_records = await prisma.weatherrecord.find_many(
        where={
            "createdAt": {
                "lte": "2023-03-22T00:00:00+00:00",
                "gte": "2023-03-22T00:00:00+00:00",
            }
        }
    )
    # print(weather_records)
    return {"weather_records": weather_records}
