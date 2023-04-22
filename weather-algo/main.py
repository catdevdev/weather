from src.apis import apis
from src.prisma import prisma
from fastapi import FastAPI

app = FastAPI()


app.include_router(apis, prefix="/api")


@app.on_event("startup")
async def startup():
    await prisma.connect()


@app.on_event("shutdown")
async def shutdown():
    await prisma.disconnect()


@app.get("/")
async def read_root():
    return {"version": '0.0.1'}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=9002)
