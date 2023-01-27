from fastapi import FastAPI
from sqlmodel import Session

from swapi.db import create_db_and_tables, engine
from swapi.db_populate import populate_empty_tables

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "In a Galaxy far far away..."}


def get_session():
    return Session(engine)


@app.on_event("startup")
def on_startup():
    create_db_and_tables()
    with get_session() as session:
        populate_empty_tables(session)
