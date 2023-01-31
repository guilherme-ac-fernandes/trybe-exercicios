# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43
# b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474
# 070/section/7939c08a-6df3-4e20-81f3-9581c68d940b/day/3d717094
# -c931-4cd3-9b5b-a65401c16d6a/lesson/101bb63d-799a-4d60-947e-4
# f63e3b40140/solution

# entradas = [1, 2, 3]
# saídas = [3, 2, 7]
# instante_buscado = 4
# resultado: 1

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou 2
# e saiu no 2 e o último foi único a estar presente no instante 4.


def students_in_instant(arrivals, departures, time_instant):
    answer = 0
    size = len(arrivals)
    for index in range(size):
        if arrivals[index] < time_instant < departures[index]:
            answer += 1
    return answer


# ou de uma maneira mais pythonica
def students_in_instant_python(arrivals, departures, time_instant):
    return sum(
        arrival < time_instant < departure
        for arrival, departure in zip(arrivals, departures)
    )


if __name__ == "__main__":
    arrivals = [1, 2, 3]
    departures = [3, 2, 7]
    time_instant = 4
    print(students_in_instant(arrivals, departures, time_instant))
    print(students_in_instant_python(arrivals, departures, time_instant))
    # Complexidade de Tempo = 0(n)
