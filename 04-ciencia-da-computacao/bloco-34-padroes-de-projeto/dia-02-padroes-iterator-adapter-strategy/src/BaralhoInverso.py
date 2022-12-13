# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43b
# 3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe11347407
# 0/section/4837cbfa-e27e-4f89-8832-b6830585020f/day/a93ea80b-f5
# 65-4ed7-929c-961b98847672/lesson/f10e2346-f169-450f-9946-29755
# 454cdb7/solution
from collections.abc import Iterator
from Baralho import Baralho


class BaralhoInversoIterator(Iterator):
    def __init__(self, cartas):
        self._cartas = cartas
        self._posicao = -1

    def __next__(self):
        try:
            carta = self._cartas[self._posicao]
        except IndexError:
            raise StopIteration()
        else:
            self._posicao -= 1
            return carta


class BaralhoInverso(Baralho):
    def __iter__(self):
        return BaralhoInversoIterator(self._cartas)


if __name__ == "__main__":
    baralho_inverso = BaralhoInverso()
    for carta in baralho_inverso:
        print(carta)
