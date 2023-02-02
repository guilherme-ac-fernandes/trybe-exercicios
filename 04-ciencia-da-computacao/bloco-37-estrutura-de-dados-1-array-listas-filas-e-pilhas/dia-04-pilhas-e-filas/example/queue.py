class Queue():
    def __init__(self):
        self._data = list()

    def enqueue(self, value):
        self._data.append(value)

    def dequeue(self):
        if len(self._data) == 0:
            return None
        return self._data.pop(0)

    def __str__(self):
        str_items = ""
        for i in range(len(self._data)):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < len(self._data):
                str_items += ", "
        return "Queue(" + str_items + ")"


if __name__ == "__main__":
    elements = ["Milkshake", "Batata Frita", "Refrigerante"]
    content_queue = Queue()
    print(content_queue)
    # Saída: Queue()

    for elem in elements:
        content_queue.enqueue(elem)
    print(content_queue)
    # Saída: Queue(Milkshake, Batata Frita, Refrigerante)

    content_queue.dequeue()
    print(content_queue)
    # Saída: Queue(Batata Frita, Refrigerante)

    print(content_queue.dequeue())
    # Saída: Batata Frita
    # porque "Milkshake" já foi removido e "Batata Frita" se
    # tornou o primeiro elemento da fila
