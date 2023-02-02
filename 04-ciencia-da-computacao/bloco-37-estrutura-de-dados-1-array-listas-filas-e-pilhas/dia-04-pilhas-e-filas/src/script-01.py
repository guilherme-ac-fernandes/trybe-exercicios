# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43
# b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474
# 070/section/7939c08a-6df3-4e20-81f3-9581c68d940b/day/c55250a2
# -6d5d-4dba-a336-4e9a9a0cc6b5/lesson/e5ad69e7-2ad6-499c-977b-8
# c4cdb779b42/solution
from src.linked_list import LinkedList


class Queue():
    def __init__(self):
        self.__data = LinkedList()

    def is_empty(self):
        return not len(self.__data)

    def enqueue(self, value):
        self.__data.insert_last(value)

    def dequeue(self):
        self.__data.remove_first()

    def peek(self):
        return self.__data.get_element_at(0)


if __name__ == "__main__":
    queue = Queue()
    print(queue.is_empty())

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    print(queue.is_empty())
    print(queue.peek())
    queue.dequeue()
