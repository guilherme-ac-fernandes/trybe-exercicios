# Resolução baseada no gabarito presente no course da Trybe
# source: fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474070/sec
# tion/7939c08a-6df3-4e20-81f3-9581c68d940b/day/fcb82cb4-dd15-4
# d21-bb99-506f948921f4/lesson/7c5934d3-3c02-484c-b0cd-b29d3bdd
# 77ba/solution
from example.node import Node


class LinkedList:
    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)

        new_last_value = Node(value)
        actual_last_value = self.__get_node_at(len(self) - 1)
        actual_last_value.next = new_last_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)
        current_value = self.__get_node_at(position - 1)
        next_value = Node(value)
        next_value.next = current_value.next
        current_value.next = next_value
        self.__length += 1

    def remove_first(self):
        value_to_be_removed = self.head_value
        if value_to_be_removed:
            self.head_value = self.head_value.next
            value_to_be_removed.next = None
            self.__length -= 1
        return value_to_be_removed

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()

        previous_to_be_removed = self.__get_node_at(len(self) - 2)
        value_to_be_removed = previous_to_be_removed.next

        previous_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        previous_to_be_removed = self.__get_node_at(position - 1)

        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = value_to_be_removed.next
        value_to_be_removed.next = None
        self.__length -= 1

        return value_to_be_removed

    def get_element_at(self, position):
        value_returned = None
        value_to_be_returned = self.__get_node_at(position)
        if value_to_be_returned:
            value_returned = Node(value_to_be_returned.value)
        return value_returned

    def is_empty(self):
        return not self.__length

    def clear(self):
        self.head_value = None
        self.__length = 0

    def __get_node_at(self, position):
        value_to_be_returned = self.head_value
        if value_to_be_returned:
            while position > 0 and value_to_be_returned.next:
                value_to_be_returned = value_to_be_returned.next
                position -= 1
        return value_to_be_returned

    def index_of(self, value):
        position = 1
        value_to_be_find = self.head_value

        while value_to_be_find:
            if value_to_be_find.value == value:
                return position
            value_to_be_find = value_to_be_find.next
            position += 1

        return -1

    def return_unique_elements(self):
        list_with_unique_elements = []
        element = self.head_value

        while element:
            if element.value not in list_with_unique_elements:
                list_with_unique_elements.append(element.value)
            element = element.next

        return sorted(list_with_unique_elements)


if __name__ == "__main__":
    linked_list = LinkedList()
    linked_list.insert_first(1)
    linked_list.insert_first(2)
    linked_list.insert_last(3)
    linked_list.insert_last(2)
    linked_list.insert_last(1)
    linked_list.insert_at(5, 1)

    print(linked_list)
    print(linked_list.return_unique_elements())

    # Complexidade de Tempo (return_unique_elements) = 0(n)
