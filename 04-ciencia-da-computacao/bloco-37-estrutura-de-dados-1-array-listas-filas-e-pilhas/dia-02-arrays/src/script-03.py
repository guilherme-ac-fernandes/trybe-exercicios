# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43
# b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474
# 070/section/7939c08a-6df3-4e20-81f3-9581c68d940b/day/3d717094
# -c931-4cd3-9b5b-a65401c16d6a/lesson/101bb63d-799a-4d60-947e-4
# f63e3b40140/solution

# Exemplo 1:
# produtos = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
# produtos = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.


def good_pairs(numbers):
    answer = 0
    i = 0
    size = len(numbers)

    for i in range(size):
        for j in range(i + 1, size):
            if numbers[i] == numbers[j]:
                answer += 1

    return answer


if __name__ == "__main__":
    print(good_pairs([1, 3, 1, 1, 2, 3]))
    print(good_pairs([1, 1, 2, 3]))
    # Complexidade de Tempo = 0(n²)
