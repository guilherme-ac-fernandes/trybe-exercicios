# Resolução baseada no gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e3
# 2-43b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4
# fe113474070/section/73f2a1d5-7d77-440b-a9f2-3ea9750db228/
# day/a0df14c3-aff5-4fda-a07b-58d970f86a01/lesson/8d4d315c-
# df64-4160-b67a-6972ff54ab38/solution
def find_bigger_num_aux(numbers, size):
    if size == 1:
        return numbers[0]
    else:
        new_position = size - 1
        bigger_number = find_bigger_num_aux(numbers, new_position)
        if bigger_number < numbers[new_position]:
            bigger_number = numbers[new_position]
        return bigger_number


def find_bigger_num(array_numbers):
    size = len(array_numbers)
    return find_bigger_num_aux(array_numbers, size)


if __name__ == "__main__":
    array_numbers = [1, 21, 300, 4, 57]
    print(find_bigger_num(array_numbers))
