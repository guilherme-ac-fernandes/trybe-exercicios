# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43
# b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474
# 070/section/7939c08a-6df3-4e20-81f3-9581c68d940b/day/3d717094
# -c931-4cd3-9b5b-a65401c16d6a/lesson/101bb63d-799a-4d60-947e-4
# f63e3b40140/solution

# 1 - OK
# 0 - Instabilidades

valores_coletados_1 = [0, 1, 1, 1, 0, 0, 1, 1]  # 3

valores_coletados_2 = [1, 1, 1, 1, 0, 0, 1, 1]  # 4


def verify_max_time_ok(collected_values):
    max_time = 0
    current_time = 0

    for status in collected_values:
        if status == 1:
            current_time += 1
        else:
            current_time = 0

        if current_time >= max_time:
            max_time = current_time

    return max_time


if __name__ == "__main__":
    print(verify_max_time_ok(valores_coletados_1))
    print(verify_max_time_ok(valores_coletados_2))
    # Complexidade de Tempo = 0(n)
