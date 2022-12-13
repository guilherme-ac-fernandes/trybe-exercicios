# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43b
# 3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe11347407
# 0/section/4837cbfa-e27e-4f89-8832-b6830585020f/day/a93ea80b-f5
# 65-4ed7-929c-961b98847672/lesson/f10e2346-f169-450f-9946-29755
# 454cdb7/solution
from abc import ABC, abstractmethod
from collections.abc import Iterable, Iterator


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%s de %s>' % (self.valor, self.naipe)


class BaralhoIterator(Iterator):
    def __init__(self, cartas, estrategia):
        self._cartas = cartas
        self._estrategia = estrategia
        self._posicao = estrategia.posicao

    def __next__(self):
        try:
            carta = self._cartas[self._posicao]
        except IndexError:
            raise StopIteration()
        else:
            self._posicao = self._estrategia.proxima_carta(self._posicao)
            return carta


class EstrategiaIteracao(ABC):
    @abstractmethod
    def proxima_carta(cls, index):
        raise NotImplementedError


class EstrategiaRegular(EstrategiaIteracao):
    posicao = 0

    @classmethod
    def proxima_carta(cls, index):
        return index + 1


class EstrategiaReversa(EstrategiaIteracao):
    posicao = -1

    @classmethod
    def proxima_carta(cls, index):
        return index - 1


class Baralho(Iterable):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self, estrategia):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.estrategia = estrategia

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return BaralhoIterator(self._cartas, self.estrategia)


if __name__ == "__main__":
    print('------------Regular------------')
    for carta in Baralho(EstrategiaRegular()):
        print(carta)

    print('------------Reverso------------')
    for carta in Baralho(EstrategiaReversa()):
        print(carta)
