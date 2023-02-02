# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43
# b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474
# 070/section/7939c08a-6df3-4e20-81f3-9581c68d940b/day/c55250a2
# -6d5d-4dba-a336-4e9a9a0cc6b5/lesson/e5ad69e7-2ad6-499c-977b-8
# c4cdb779b42/solution
from src.stack_list import Stack


def solve_expression(expr):
    stack = Stack()
    tokens_list = expr.split(' ')

    for token in tokens_list:
        if token == '+':
            # Sum operation
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == '*':
            # multiply operation
            result = stack.pop() * stack.pop()
            stack.push(result)
        elif token == '-':
            # Minus operation
            op2 = stack.pop()
            op1 = stack.pop()
            result = op1 - op2
            stack.push(result)
        elif token == '/':
            # Division operation
            op2 = stack.pop()
            op1 = stack.pop()
            result = op1 / op2
            stack.push(result)
        else:
            # add the number operation
            stack.push(int(token))

    return stack.pop()


if __name__ == "__main__":
    # A = 5, B = 10, C = 30

    # A + B - C / A -> 5 10 + 30 5 / -
    print(solve_expression('5 10 + 30 5 / -'))  # 9

    # B + (A * C) / C * 2 -> 10 5 30 * 30 / 2 * +
    print(solve_expression('10 5 30 * 30 / 2 * +'))  # 20

    # A * B - C + 4 * A - B -> 5 10 * 30 - 4 5 * 10 - +
    print(solve_expression('5 10 * 30 - 4 5 * 10 - +'))  # 30

    # (A + C / B ) * (A + B) -> 30 10 / 5 + 5 10 + *
    print(solve_expression('30 10 / 5 + 5 10 + *'))  # 120

    # 50 * B / 2 * 5 / A -> 50 10 * 2 / 5 * 5 /
    print(solve_expression('50 10 * 2 / 5 * 5 /'))  # 250

    # Complexidade de Tempo
    # O algoritmo realiza push e pop, que na Pilha possuem
    # Complexidade de tempo é O(1).
