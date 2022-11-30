import math

# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530f
# d326/module/290e715d-73e3-4b2d-a3c7-4fe113474070/section/b436f9e0-dfde-4a16-9
# bad-82f0c559dd45/day/bee44ac6-0782-48cd-9ce8-1811980e558e/lesson/a8b2240d-308
# c-47c1-bd44-ee79902706e5/solution


def paint_costs(area: int):
    can_price = 80
    required_liters = area / 3
    required_cans = math.ceil(required_liters / 18)
    return required_cans, required_cans * can_price


print(paint_costs(30))  # (1, 80)
print(paint_costs(56.78))  # (2, 160)
print(paint_costs(196.78))  # (4, 320)
