from character import Character
from lightsaber import LightSaber


class Jedi(Character):
    def __init__(self, name, specie, hp, side, color):
        super().__init__(name, specie, hp, side)
        self.lightsaber = LightSaber(color, 250)

    def attack(self, character):
        character.damage(self.lightsaber.power)

    def __str__(self):
        return f"""
            Name: {self.name}
            Specie: {self.specie}
            HP: {self.hp}
            Side: {self.side}
            LightSaber: {self.lightsaber}
        """


class Sith(Character):
    def __init__(self, name, specie, hp, side):
        super().__init__(name, specie, hp, side)
        self.lightsaber = LightSaber('Vermelho', 300, True)

    def attack(self, character):
        character.damage(self.lightsaber.power)

    def __str__(self):
        return f"""
            Name: {self.name}
            Specie: {self.specie}
            HP: {self.hp}
            Side: {self.side}
            LightSaber: {self.lightsaber}
        """


if __name__ == "__main__":
    obi_wan = Jedi('Obi Wan Kenobi', 'Human', 600, 'Light', 'Green')
    darth_maul = Sith('Darth Maul', 'Dathomirian', 700, 'Dark')

    print(obi_wan)
    print(darth_maul)
