def sum_all_smallest_number(number: int):
    sum = 0
    for num in range(1, number + 1):
        sum += num
    return sum


print(sum_all_smallest_number(5))  # 15
print(sum_all_smallest_number(12))  # 78
print(sum_all_smallest_number(100))  # 5050
