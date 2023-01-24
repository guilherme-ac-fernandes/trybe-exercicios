# Resolução baseada no gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e3
# 2-43b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4
# fe113474070/section/73f2a1d5-7d77-440b-a9f2-3ea9750db228/
# day/346e18ae-25d8-47a5-bd59-0e4d9cd2a2d2/lesson/b0a41655-
# 4d9b-4f94-822b-4f6884f0a03c/solution
def find_first_bad_version(array):
    start = 0
    end = len(array) - 1

    while end >= start:
        mid = (end + start) // 2
        if array[mid] is False:
            end = mid - 1
        else:
            start = mid + 1

    return start


if __name__ == "__main__":
    case_one = [True, True, True, True, False, False, False]
    case_two = [True, True, False, False, False, False, False]

    print("Saída (caso 1):", find_first_bad_version(case_one))
    print("Saída (caso 2):", find_first_bad_version(case_two))
