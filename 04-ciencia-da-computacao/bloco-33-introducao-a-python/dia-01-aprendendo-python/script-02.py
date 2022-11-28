def avg(number_list: list):
    sum = 0
    for number in number_list:
        sum += number
    return sum/len(number_list)


print(avg([10, 7, 90, 12, 45]))  # 32.8
print(avg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))  # 5.5
