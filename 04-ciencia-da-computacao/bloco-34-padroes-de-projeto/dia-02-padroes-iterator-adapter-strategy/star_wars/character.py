class Character:
    def __init__(self, name, specie, hp, side):
        self.name = name
        self.specie = specie
        self.__hp = hp
        self.side = side

    @property
    def hp(self):
        return self.__hp

    # @hp.setter
    # def hp(self, damage):
    #     self.__hp -= damage
    # forma de chamar = nome_do_personagem.hp = 30

    def damage(self, damage):
        heath_points = self.__hp - damage
        if heath_points < 0:
            self.__hp = 0
        else:
            self.__hp = heath_points
