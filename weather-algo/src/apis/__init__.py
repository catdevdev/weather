from fastapi import APIRouter

from src.apis.get_weather_records import router as get_weather_records
from src.apis.get_average_weather_records import router as get_average_weather_records


apis = APIRouter()
apis.include_router(get_weather_records)
apis.include_router(get_average_weather_records)

__all__ = ["apis"]
