# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43b
# 3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe11347407
# 0/section/b436f9e0-dfde-4a16-9bad-82f0c559dd45/day/61e88b4a-b9
# 7a-4f96-b5a0-abaa50651e37/lesson/662735d9-55a1-41d8-98d5-23fa9
# c340f01/solution

def vertical_inverted_ladder(word):
    for index_removed_letters in range(len(word)):
        for index in range(len(word) - index_removed_letters):
            print(word[index], end="")  # end="" para ficar tudo na mesma linha
        print()  # para alterar a linha
    # Solução proposta pelo Felipe Martins utilizando fatiamento
    # for i in range(0, len(word) + 1):
    #     print(word[i:])


if __name__ == "__main__":
    string_name = input('Digite seu nome: ')
    vertical_inverted_ladder(string_name)
