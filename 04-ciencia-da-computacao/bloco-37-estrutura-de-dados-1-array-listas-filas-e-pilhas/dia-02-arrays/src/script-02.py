# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43
# b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474
# 070/section/7939c08a-6df3-4e20-81f3-9581c68d940b/day/3d717094
# -c931-4cd3-9b5b-a65401c16d6a/lesson/101bb63d-799a-4d60-947e-4
# f63e3b40140/solution

# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2
# resultado = [2, 4, 6, 5]

# Exemplo 2:
# cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3
# resultado = [1, 7, 4, 6, 4, 6]


def shuffle(items):
    answer = []
    div_cards_by_two = len(items) // 2

    for offset in range(div_cards_by_two):
        answer.extend(items[offset::div_cards_by_two])

    return answer


if __name__ == "__main__":
    print(shuffle([2, 6, 4, 5]))
    print(shuffle([1, 4, 4, 7, 6, 6]))
    # Complexidade de Tempo = 0(n)
