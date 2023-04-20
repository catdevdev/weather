from fastapi import APIRouter
from src.prisma import prisma
# from main import prisma

router = APIRouter()


@router.get("/weather-records")
async def get_weather_records():
    weatherrecords = await prisma.weatherrecord.find_many()
    return {"weather_records": "weatherrecords"}
