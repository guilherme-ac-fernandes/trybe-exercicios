# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43
# b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474
# 070/section/7939c08a-6df3-4e20-81f3-9581c68d940b/day/c55250a2
# -6d5d-4dba-a336-4e9a9a0cc6b5/lesson/e5ad69e7-2ad6-499c-977b-8
# c4cdb779b42/solution
from src.linked_list import LinkedList


class Stack:
    def __init__(self):
        self.__data = LinkedList()

    def is_empty(self):
        return not len(self.__data)

    def push(self, value):
        self.__data.insert_last(value)

    def pop(self):
        return self.__data.remove_last()

    def peek(self):
        return self.__data.get_element_at(len(self.__data))

    def min_value(self):
        if self.is_empty():
            return None

        min_value = self.__data.head_value.value

        for index in range(1, len(self.__data)):
            element = self.__data.get_element_at(index).value
            if element < min_value:
                min_value = element

        return min_value


if __name__ == "__main__":
    elements = [2, 1, 5, 4, 10, 6, 8, 22, 11, 10]
    stack = Stack()

    for elem in elements:
        stack.push(elem)

    print(stack.min_value())  # saída: 1
    stack.push(-5)
    print(stack.min_value())  # saída: -5

    # Complexidade de Tempo (min_value) = 0(n)
