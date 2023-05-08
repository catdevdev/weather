import datetime
from fastapi import APIRouter
from src.prisma import prisma
from pydantic import BaseModel

router = APIRouter()


class Args(BaseModel):
    gte: datetime.datetime
    lte: datetime.datetime
    weatherStationId: str


@router.get("/weather-records")
async def get_weather_records(args: Args):
    weather_records = await prisma.weatherrecord.find_many(
        where={
            "createdAt": {
                "gte": args.gte,
                "lte": args.lte,
            },
            'weatherStationId': args.weatherStationId
        },
        order={
            "createdAt": "asc"
        }
    )

    if len(weather_records) == 0:
        return {"weather_records": []}

    # initialize variables
    last_timestamp = weather_records[0].createdAt
    new_list = [weather_records[0]]
    result_list = []

    # iterate through the weather records
    for i in range(1, len(weather_records)):
        current_timestamp = weather_records[i].createdAt
        if (current_timestamp - last_timestamp).total_seconds() > 5:
            # start a new list if the time difference is more than 5 seconds
            result_list.append(new_list)
            new_list = [weather_records[i]]
        else:
            new_list.append(weather_records[i])
        last_timestamp = current_timestamp

    # add the final list to the result list
    result_list.append(new_list)

    return {"weather_records": result_list}

    # "gte": "2010-03-22T00:00:00+00:00",
    # "lte": "2030-03-22T00:00:00+00:00",
