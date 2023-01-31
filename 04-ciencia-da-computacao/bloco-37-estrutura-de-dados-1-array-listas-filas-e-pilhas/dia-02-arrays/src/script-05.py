# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43
# b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474
# 070/section/7939c08a-6df3-4e20-81f3-9581c68d940b/day/3d717094
# -c931-4cd3-9b5b-a65401c16d6a/lesson/101bb63d-799a-4d60-947e-4
# f63e3b40140/solution

# servidores =  [[1,0],[0,1]]
# resultado: 0
# Linhas e colunas são diferentes.

# servidores = [[1,0],[1,1]]
# resultado: 3
# Todos os servidores se comunicam com ao menos um outro servidor.

# servidores = [[1, 0, 0],
#               [1, 0, 0],
#               [0, 0, 1]]
# resultado: 2
# O servidor de índice (2, 2) não possui nenhum outro na mesma
# linha e coluna.


def count_servers(grid):

    rows, columns = len(grid), len(grid[0])
    servers_in_rows = [0 for _ in range(rows)]
    servers_in_columns = [0 for _ in range(columns)]

    for i in range(rows):
        for j in range(columns):
            if grid[i][j] == 1:
                servers_in_rows[i] += 1
                servers_in_columns[j] += 1

    answer = 0
    for i in range(rows):
        for j in range(columns):
            if grid[i][j] == 1 and (
                servers_in_rows[i] > 1 or servers_in_columns[j] > 1
            ):
                answer += 1

    return answer


if __name__ == "__main__":
    server_1 = [[1, 0], [0, 1]]
    server_2 = [[1, 0], [1, 1]]
    server_3 = [[1, 0, 0], [1, 0, 0], [0, 0, 1]]
    print(count_servers(server_1))
    print(count_servers(server_2))
    print(count_servers(server_3))
    # Complexidade de Tempo = 0(n.m)
