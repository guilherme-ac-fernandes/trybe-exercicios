class TV():
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        self.__ligada = True
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        self.__ligada = True
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, canal):
        self.__ligada = True
        if canal <= 1 or canal >= 99:
            raise ValueError('Canal indisponível')
        self.__canal = canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    def __str__(self):
        if self.__ligada:
            return f"""
              Televisão de {self.__tamanho} polegadas
              Volume: {self.__volume}
              Canal: {self.__canal}
            """
        else:
            return 'Televisão desligada'


if __name__ == "__main__":
    my_tv = TV(55)
    print(my_tv)
    # my_tv.ligar_desligar()
    my_tv.aumentar_volume()
    my_tv.aumentar_volume()
    my_tv.aumentar_volume()
    my_tv.aumentar_volume()
    my_tv.modificar_canal(28)
    print(my_tv)
