# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43b
# 3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe11347407
# 0/section/4837cbfa-e27e-4f89-8832-b6830585020f/day/d0e0d979-49
# e2-49f6-abaf-c8e3516397f5/lesson/01879708-0cdb-45fe-ac62-8f612e
# 84c17f/solution
from collections import Counter


class Estatistica:
    @classmethod
    def media(cls, numbers):
        return sum(numbers) / len(numbers)

    @classmethod
    def mediana(cls, numbers):
        numbers.sort()
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[index - 1] + numbers[index]) / 2

        return numbers[index]

    @classmethod
    def moda(cls, numbers):
        number, _ = Counter(numbers).most_common()[0]
        return number


if __name__ == "__main__":
    numbers = [1, 3, 1, 7, 7, 5, 8, 7, 5, 2]
    print(f"Média = {Estatistica.media(numbers)}")
    print(f"Mediana = {Estatistica.mediana(numbers)}")
    print(f"Moda = {Estatistica.moda(numbers)}")
