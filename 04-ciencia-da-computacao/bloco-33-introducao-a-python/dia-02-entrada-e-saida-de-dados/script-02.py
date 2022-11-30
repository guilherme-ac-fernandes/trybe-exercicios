import random

MAX_ATTEMPTS = 3


def generate_random_word():
    colors_list = ['blue', 'pink', 'yellow', 'red', 'purple']
    word = random.choice(colors_list)
    scrambled_word = ''.join(random.sample(word, len(word)))
    return word, scrambled_word


def scrambled_string(word: str):
    for index in range(1, MAX_ATTEMPTS + 1):
        guess = input(f'Guess the Color ({index} Attempt): ')
        if guess == word:
            print(f"You win: {word}")
            return
        else:
            print(f'More {MAX_ATTEMPTS - index} chances')
    print(f"You lose: {word}")


if __name__ == "__main__":
    word, scrambled_word = generate_random_word()
    print('-----------------------------------')
    print(f"Scrambled word is {scrambled_word}")
    print('-----------------------------------')
    scrambled_string(word)
