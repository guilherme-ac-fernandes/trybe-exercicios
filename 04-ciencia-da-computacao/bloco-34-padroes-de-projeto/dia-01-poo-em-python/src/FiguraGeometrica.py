# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43b
# 3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe11347407
# 0/section/4837cbfa-e27e-4f89-8832-b6830585020f/day/d0e0d979-49
# e2-49f6-abaf-c8e3516397f5/lesson/01879708-0cdb-45fe-ac62-8f612e
# 84c17f/solution
from abc import ABC, abstractmethod
from math import pi as PI


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado ** 2

    def perimetro(self):
        return self.lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return (self.base + self.altura) * 2


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return PI * self.raio ** 2

    def perimetro(self):
        return 2 * PI * self.raio


if __name__ == "__main__":
    circle = Circulo(4)
    rectangle = Retangulo(4, 3)
    square = Quadrado(5)

