import json
import random


def read_pokemon():
    try:
        with open("data/pokemons.json", mode="r") as pokemon_file:
            pokemon = json.load(pokemon_file)["results"]
            pokemon_names = [pok["name"] for pok in pokemon]
    except FileExistsError:
        print("File Not Found")
    except json.decoder.JSONDecodeError:
        print("File with problems")
    finally:
        pokemon_file.close()
    return pokemon, pokemon_names


def random_pokemon(pokemon_list):
    selected_pokemon = random.choice(pokemon_list)
    return selected_pokemon


def gerenate_game(selected_pokemon):
    for index in range(1, len(selected_pokemon) + 1):
        guess = input("Guess the Pokemon: ")
        if guess == selected_pokemon:
            print(f"You win: {selected_pokemon}")
            return
        else:
            print('-----------------------------------')
            print("Try again.")
            print(f"Hint: Pokemon starts with {selected_pokemon[:index]}")
            print('-----------------------------------')
    print(f"You lose, it was {selected_pokemon}")


if __name__ == "__main__":
    pokemon, pokemon_names = read_pokemon()
    selected_pokemon = random_pokemon(pokemon_names)
    gerenate_game(selected_pokemon)
