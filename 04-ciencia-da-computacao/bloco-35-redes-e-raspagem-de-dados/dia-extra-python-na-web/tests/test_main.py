from fastapi.testclient import TestClient
from swapi.main import app
import pytest

from unittest.mock import patch
from swapi.db_populate import populate_empty_tables
from sqlmodel.pool import StaticPool
from sqlmodel import SQLModel, create_engine, Session
# from fastapi.testclient import TestClient
# from swapi.main import app


client = TestClient(app)


def get_session_mock():
    engine = create_engine(
        "sqlite://",
        connect_args={"check_same_thread": False},
        poolclass=StaticPool,
    )
    SQLModel.metadata.create_all(engine)
    session = Session(engine)
    populate_empty_tables(session)

    return session


def test_get_planet_route():
    with patch('swapi.main.get_session', get_session_mock):
        response = client.get("/api/planets/")

        assert response.status_code == 200
        data = response.json()

        assert data["count"] == 60


@pytest.fixture
def single_planet_mock():
    return {
        "name": "new_planet",
        "rotation_period": "14",
        "orbital_period": "34",
        "diameter": "1045",
        "climate": "tropic",
        "gravity": "1 standard",
        "terrain": "planains",
        "surface_water": "1",
        "population": "50000",
    }


def test_post_planet_route(single_planet_mock):
    with patch("swapi.main.get_session", get_session_mock):
        response = client.post("/api/planets/", json=single_planet_mock)

        assert response.status_code == 201
        data = response.json()

        assert data["id"] == 61
