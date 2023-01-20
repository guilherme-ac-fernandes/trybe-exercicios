from typing import Optional
from sqlmodel import Field, SQLModel


class Planet(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(max_length=100)

    rotation_period: str = Field(max_length=40)
    orbital_period: str = Field(max_length=40)
    diameter: str = Field(max_length=40)
    climate: str = Field(max_length=40)
    gravity: str = Field(max_length=40)
    terrain: str = Field(max_length=40)
    surface_water: str = Field(max_length=40)
    population: str = Field(max_length=40)
