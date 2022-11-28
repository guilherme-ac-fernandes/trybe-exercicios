def sum_fatorial(number: int):
    sum = 0
    for num in range(1, number + 1):
        sum += num
    return sum


print(sum_fatorial(5))  # 15
print(sum_fatorial(12))  # 78
print(sum_fatorial(100))  # 5050
