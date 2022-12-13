from abc import ABC, abstractmethod


class Imposto(ABC):
    @abstractmethod
    def calcular(cls, valor):
        raise NotImplementedError


class ISS(Imposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.1


class ICMS(Imposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.06


class PIS(Imposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.0065


class COFINS(Imposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.03


class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto):
        return imposto.calcular(self.valor)


if __name__ == "__main__":
    orcamento = Orcamento(1000)
    print(f"ISS: {orcamento.calcular_imposto(ISS)}")
    print(f"ICMS: {orcamento.calcular_imposto(ICMS)}")
    print(f"PIS: {orcamento.calcular_imposto(PIS)}")
    print(f"COFINS: {orcamento.calcular_imposto(COFINS)}")
