from datetime import datetime, timedelta
from fastapi import APIRouter
from src.prisma import prisma
from pydantic import BaseModel
import pandas as pd
from collections import defaultdict
from statistics import mean

router = APIRouter()


class TimeFrame(BaseModel):
    gte: datetime
    lte: datetime


@router.get("/get-average-weather-records")
async def get_average_weather_records(timeFrame: TimeFrame):
    weather_records = await prisma.weatherrecord.find_many(
        where={
            "createdAt": {
                "gte": timeFrame.gte,
                "lte": timeFrame.lte,
            }
        },
        order={
            "createdAt": "asc"
        }
    )

    if len(weather_records) == 0:
        return {'get_average_weather_records': []}

    dict_list = [record.dict() for record in weather_records]

    df = pd.DataFrame(dict_list)

    df.set_index(pd.DatetimeIndex(df['createdAt']), inplace=True)

    df_hourly_avg = pd.DataFrame.from_records(df.groupby(pd.Grouper(freq='H'))[
                                              'weatherRecord'].apply(list).apply(lambda x: pd.DataFrame(x).mean(axis=0)))

    return {'get_average_weather_records': df_hourly_avg}
