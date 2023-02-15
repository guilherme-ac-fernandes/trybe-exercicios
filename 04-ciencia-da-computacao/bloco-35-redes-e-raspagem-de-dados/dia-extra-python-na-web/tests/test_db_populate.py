import json
import pytest
from unittest.mock import patch, mock_open
from sqlmodel import SQLModel, Session, create_engine, select
from sqlmodel.pool import StaticPool
from swapi.db_populate import populate_table_planet
from swapi.model import Planet


@pytest.fixture(name='engine')
def engine_fixture():
    engine = create_engine(
        "sqlite://",  # Creates in-memory database
        connect_args={"check_same_thread": False},
        poolclass=StaticPool,  # Single static connection pool
    )
    SQLModel.metadata.create_all(engine)

    return engine


@pytest.fixture
def fake_planets_data():
    return [
        {
            "id": 1,
            "name": "Tatooine",
            "rotation_period": "23",
            "orbital_period": "304",
            "diameter": "10465",
            "climate": "arid",
            "gravity": "1 standard",
            "terrain": "desert",
            "surface_water": "1",
            "population": "200000",
        },
        {
            "id": 2,
            "name": "Alderaan",
            "rotation_period": "24",
            "orbital_period": "364",
            "diameter": "12500",
            "climate": "temperate",
            "gravity": "1 standard",
            "terrain": "grasslands, mountains",
            "surface_water": "40",
            "population": "2000000000",
        },
    ]


def test_populate_table_planet(engine, fake_planets_data):
    fake_data_open = mock_open(
        read_data=json.dumps(fake_planets_data)
    )

    with (
        Session(engine) as session,
        patch('builtins.open', fake_data_open)
    ):
        populate_table_planet(session)

        planets = session.exec(select(Planet)).all()
        assert len(planets) == len(fake_planets_data)
