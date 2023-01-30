# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43
# b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474
# 070/section/7939c08a-6df3-4e20-81f3-9581c68d940b/day/60f19dc5
# -dea8-40c6-8784-2193b59f0975/lesson/93bdf9af-a7da-4c39-a0ea-e
# 2838292fc07/solution
from subprocess import check_output
from time import sleep


while True:
    memory_information = [
        information
        for information in check_output("free")
        .decode("UTF-8")
        .split("\n")[1]
        .split(" ")
        if information != ""
    ]
    total_memory = int(memory_information[1]) / 1000
    used_memory = int(memory_information[2]) / 1000
    print(
        f"\nMemória total: {total_memory:.0f}MB\n"
        f"Memória utilizada: {used_memory:.0f}MB"
    )
    sleep(1)
