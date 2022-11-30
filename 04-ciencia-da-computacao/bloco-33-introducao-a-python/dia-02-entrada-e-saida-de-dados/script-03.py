import random

MAX_ATTEMPTS = 3

# Utilização do replace para remover os espaços e nova linha
# proveniente do StackOverFlow
# https://stackoverflow.com/questions/43447221/removing-all
# -spaces-in-text-file-with-python-3-x


def open_colors():
    try:
        with open('data/colors.txt', mode='r') as file_colors:
            colors_list = [line.replace(' ', '').replace('\n', '')
                           for line in file_colors]
    except FileExistsError:
        print('File Not Found')
    finally:
        file_colors.close()
    return colors_list


def generate_random_word(colors_list):
    word = random.choice(colors_list)
    scrambled_word = ''.join(random.sample(word, len(word)))
    return word, scrambled_word


def scrambled_string(word):
    for index in range(1, MAX_ATTEMPTS + 1):
        guess = input(f'Guess the Color ({index} Attempt): ')
        if guess == word:
            print(f"You win: {word}")
            return
        else:
            print(f'More {MAX_ATTEMPTS - index} chances')
    print(f"You lose: {word}")


if __name__ == "__main__":
    colors_list = open_colors()
    word, scrambled_word = generate_random_word(colors_list)
    print('-----------------------------------')
    print(f"Scrambled word is {scrambled_word}")
    print('-----------------------------------')
    scrambled_string(word)
