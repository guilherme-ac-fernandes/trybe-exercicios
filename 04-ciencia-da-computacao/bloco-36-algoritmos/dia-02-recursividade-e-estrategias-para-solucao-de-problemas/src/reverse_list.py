# Resolução baseada no gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e3
# 2-43b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4
# fe113474070/section/73f2a1d5-7d77-440b-a9f2-3ea9750db228/
# day/a0df14c3-aff5-4fda-a07b-58d970f86a01/lesson/8d4d315c-
# df64-4160-b67a-6972ff54ab38/solution
def reverse_list(list):
    if len(list) < 2:
        return list
    else:
        return reverse_list(list[1:]) + [list[0]]


if __name__ == "__main__":
    print(reverse_list([1, 2, 3, 4, 5]))
