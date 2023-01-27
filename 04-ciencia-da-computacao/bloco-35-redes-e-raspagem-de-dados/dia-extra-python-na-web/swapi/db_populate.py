from sqlmodel import SQLModel, Session, select
from swapi.model import Planet
import json


def populate_table_planet(session):
    with open('data/planets.json') as file:
        planets = json.load(file)

    for each_planet in planets:
        planet = Planet(
            id=each_planet["id"],
            name=each_planet["name"],
            rotation_period=each_planet["rotation_period"],
            orbital_period=each_planet["orbital_period"],
            diameter=each_planet["diameter"],
            climate=each_planet["climate"],
            gravity=each_planet["gravity"],
            terrain=each_planet["terrain"],
            surface_water=each_planet["surface_water"],
            population=each_planet["population"],
        )

        session.add(planet)
        session.commit()


def is_table_empty(session: Session, model: SQLModel):
    return session.exec(select(model)).first() is None


def populate_empty_tables(session):
    if is_table_empty(session, Planet):
        populate_table_planet(session)
