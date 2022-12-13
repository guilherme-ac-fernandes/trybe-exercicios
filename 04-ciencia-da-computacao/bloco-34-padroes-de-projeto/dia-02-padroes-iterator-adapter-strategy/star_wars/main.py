from character import Character

darth = Character('Darth Vader', 'Human', 250, 'Dark')
luke = Character('Luke Skywalker', 'Human', 210, 'Light')
leia = Character('Leia Skywalker', 'Human', 190, 'Light')
grogu = Character('Grogu', 'Unknown', 199, 'Light')
phanton = Character('Phanton', 'Human', 200, 'Dark')
mandalorian = Character(
  'Din Djarin', 'Human/Mandalorian', 300, 'Light'
)

if __name__ == "__main__":
    print(vars(darth))
    print(vars(luke))
    print(vars(leia))
    print(vars(grogu))
    print(vars(phanton))

    print('----------Mando----------')
    print(mandalorian.name)
    print(mandalorian.specie)
    print(mandalorian.hp)
    print(mandalorian.side)

    mandalorian.damage(203)
    print(vars(mandalorian))
