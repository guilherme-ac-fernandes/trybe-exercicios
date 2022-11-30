def draw_square(size: int):
    if size > 0:
        for row in range(size):
            print(size * '*')
    else:
        print('Tamanho inválido')


draw_square(5)
draw_square(12)
