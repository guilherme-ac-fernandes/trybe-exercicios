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

    def size(self):
        return len(self.__data)

    def min_value(self):
        if self.is_empty():
            return None

        min_value = self.__data.head_value.value

        for index in range(1, len(self.__data)):
            element = self.__data.get_element_at(index).value
            if element < min_value:
                min_value = element

        return min_value
