def type_of_triangle(l1, l2, l3):
    if l1 > (l2 + l3) or l2 > (l1 + l3) or l3 > (l1 + l2):
        return 'Não é triangulo'
    elif l1 == l2 == l3:
        return 'Triângulo Equilátero'
    elif l1 == l2 or l2 == l3 or l1 == l3:
        return 'Triângulo Isósceles'
    else:
        return 'Triângulo Escaleno'


print(type_of_triangle(30, 20, 10))  # Triângulo Escaleno
print(type_of_triangle(30, 30, 30))  # Triângulo Equilátero
print(type_of_triangle(30, 20, 20))  # Triângulo Isósceles
print(type_of_triangle(50, 20, 20))  # Não é triangulo
