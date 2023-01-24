def merge_sort(numbers, start=0, end=None):
    if end is None:
        end = len(numbers)
    # se não reduzi o suficiente, continua
    if (end - start) > 1:
        # encontrando o meio
        mid = (start + end) // 2
        # dividindo as listas
        merge_sort(numbers, start, mid)
        merge_sort(numbers, mid, end)
        # unindo as listas
        merge(numbers, start, mid, end)

# função auxiliar que realiza a mistura dos dois arrays


def merge(numbers, start, mid, end):
    # indexando a lista da esquerda
    left = numbers[start:mid]
    # indexando a lista da direita
    right = numbers[mid:end]

    # as duas listas começarão do início
    left_index, right_index = 0, 0

    # percorrer sobre a lista inteira como se fosse uma
    for general_index in range(start, end):
        # se os elementos da esquerda acabaram, preenche o restante
        # com a lista da direita
        if left_index >= len(left):
            numbers[general_index] = right[right_index]
            right_index = right_index + 1
        # se os elementos da direita acabaram, preenche o restante
        # com a lista da esquerda
        elif right_index >= len(right):
            numbers[general_index] = left[left_index]
            left_index = left_index + 1
        # se o elemento do topo da esquerda for menor que o da direita,
        # ele será o escolhido
        elif left[left_index] < right[right_index]:
            numbers[general_index] = left[left_index]
            left_index = left_index + 1
        else:
            # caso o da direita seja menor, ele será o escolhido
            numbers[general_index] = right[right_index]
            right_index = right_index + 1


if __name__ == "__main__":
    numbers = [6, 5, 3, 1, 8, 7, 2, 4]
    merge_sort(numbers, 0, len(numbers))
    print(numbers)
