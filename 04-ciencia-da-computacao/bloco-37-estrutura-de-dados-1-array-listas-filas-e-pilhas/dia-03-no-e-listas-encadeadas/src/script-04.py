# Resolução proveniente do gabarito presente no course da Trybe
# source: fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474070/sec
# tion/7939c08a-6df3-4e20-81f3-9581c68d940b/day/fcb82cb4-dd15-4
# d21-bb99-506f948921f4/lesson/7c5934d3-3c02-484c-b0cd-b29d3bdd
# 77ba/solution
# from example.node import Node


class DoublyLinkedList:
    # ... (não implementado)

    def index_of(self, value):
        position = 1
        current_value = self.head.next
        while current_value != self.tail:
            if current_value.value == value:
                return position
            current_value = current_value.next
            position += 1
        return -1


def return_unique_elements(linkedList):
    list_with_unique_elements = DoublyLinkedList()

    while linkedList:
        current_node = linkedList.remove_first()
        if linkedList.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements


if __name__ == "__main__":
    double_linked_list = DoublyLinkedList()
    double_linked_list.insert_first(1)
    double_linked_list.insert_first(2)
    double_linked_list.insert_last(3)
    double_linked_list.insert_last(2)
    double_linked_list.insert_last(1)
    double_linked_list.insert_at(5, 1)

    print(double_linked_list)
    print(double_linked_list.return_unique_elements())

    # Complexidade de Tempo (index_of) = 0(n)
    # Complexidade de Tempo (return_unique_elements) = 0(n)
