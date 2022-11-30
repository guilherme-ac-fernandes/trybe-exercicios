def draw_piramed(size: int):
    if size > 0:
        for row in range(size + 1):
            print(row * '*')
    else:
        print('Tamanho inválido')


draw_piramed(5)
draw_piramed(12)
draw_piramed(0)
