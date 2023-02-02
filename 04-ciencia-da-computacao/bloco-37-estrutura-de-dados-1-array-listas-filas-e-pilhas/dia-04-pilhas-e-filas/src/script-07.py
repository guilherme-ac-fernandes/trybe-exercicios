# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43
# b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474
# 070/section/7939c08a-6df3-4e20-81f3-9581c68d940b/day/c55250a2
# -6d5d-4dba-a336-4e9a9a0cc6b5/lesson/e5ad69e7-2ad6-499c-977b-8
# c4cdb779b42/solution
from src.stack_list import Stack


def reverse_word(stack):
    char = ')'
    reversed_word = []
    while char != '(':
        char = stack.pop()
        if char != '(':
            reversed_word.append(char)

    for letter in reversed_word:
        stack.push(letter)


def reverse_letters(phrase):
    stack = Stack()
    for char in phrase:
        if char != ')':
            stack.push(char)
        else:
            reverse_word(stack)

    reversed_phrase = []
    while not stack.is_empty():
        reversed_phrase.append(stack.pop())

    return ''.join(reversed(reversed_phrase))


if __name__ == "__main__":
    print(reverse_letters('teste(lagel)'))
    print(reverse_letters('(abcd)'))
    print(reverse_letters('(u(love)i)'))
    print(reverse_letters('(ed(et(oc))el)'))
    print(reverse_letters('a(bcdefghijkl(mno)p)q'))

    # Complexidade de Tempo
    # Este algoritmo realiza pop e push de itens, que na
    # Pilha possuem Complexidade de tempo é O(1), porém
    # existem alguns whiles e forsque percorrem listas, e
    # por isso sua Complexidade de tempo é O(n).
