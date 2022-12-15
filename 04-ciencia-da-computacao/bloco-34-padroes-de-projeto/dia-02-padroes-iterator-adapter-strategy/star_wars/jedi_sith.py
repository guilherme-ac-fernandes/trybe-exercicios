from character import Character
from lightsaber import LightSaber
from random import choice


class Jedi(Character):
    def __init__(self, name, specie, hp, side, color):
        super().__init__(name, specie, hp, side)
        self.lightsaber = LightSaber(color, 250)

    def strike_back(self, character):
        character.damage(self.lightsaber.power)

    def defense(self):
        defense_option = choice([True, False])
        return defense_option

    def speak(self):
        if self.hp == 0:
            print(f'"{self.name}" speak: Nooooooooooo!!')
            return
        print(f'"{self.name}" speak: May the force be with you!!')

    def __str__(self):
        return f"""
            Name: {self.name}
            Specie: {self.specie}
            HP: {self.hp}
            Side: {self.side}
            LightSaber: {self.lightsaber}
        """


class Sith(Character):
    def __init__(self, name, specie, hp, side, isDouble):
        super().__init__(name, specie, hp, side)
        self.lightsaber = LightSaber('Vermelho', 300, isDouble)

    def strike(self, character):
        if not character.defense:
            character.damage(self.lightsaber.power)

    def defense(self):
        defense_option = choice([True, False])
        return defense_option

    def speak(self):
        if self.hp == 0:
            print(f'"{self.name}" speak: I will be back!!!!!!!!')
            return
        print(f'"{self.name}" speak: Come to the Dark Side!!')

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
    darth_maul = Sith('Darth Maul', 'Dathomirian', 700, 'Dark', True)

    sith = darth_maul
    jedi = obi_wan
    print(obi_wan)
    print(darth_maul)

    print("__________________ Let's fight __________________")
    print("________________ Sith  vs  Jedi ________________\n")

    sith.speak()
    jedi.speak()

    while sith.hp > 0:
        print(f"{sith.name} ({sith.hp}) ataca {jedi.name} ({jedi.hp})")
        sith.strike(jedi)
        jedi.speak()
        if jedi.hp > 0:
            print(f"{jedi.name} ({jedi.hp}) ataca {sith.name} ({sith.hp})")
            jedi.strike_back(sith)
            sith.speak()
        else:
            break
