from fastapi import FastAPI
from sqlmodel import Session, select

from swapi.db import create_db_and_tables, engine
from swapi.db_populate import populate_empty_tables
from swapi.model import Planet

app = FastAPI()


def get_session():
    return Session(engine)


@app.on_event("startup")
def on_startup():
    create_db_and_tables()

    with get_session() as session:
        populate_empty_tables(session)


@app.get("/")
async def root():
    return {"message": "In a Galaxy far far away..."}


def create_response(result):
    return {
        "count": len(result),
        "next": None,
        "previous": None,
        "results": result,
    }


@app.get("/api/planets/", tags=["planets"])
async def list_planets():
    with get_session() as session:
        planets = session.exec(select(Planet)).all()

        return create_response(planets)


@app.post("/api/planets/",  tags=["planets"], status_code=201)
async def create_planet(planet: Planet):
    with get_session() as session:
        db_planet = Planet.from_orm(planet)
        session.add(db_planet)
        session.commit()
        session.refresh(db_planet)
        return db_planet
