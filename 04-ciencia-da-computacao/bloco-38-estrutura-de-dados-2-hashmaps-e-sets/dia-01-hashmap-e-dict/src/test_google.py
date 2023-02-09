def score(subordinates, person):
    this_score = 1

    for subordinate in subordinates[person]:
        this_score += score(subordinates, subordinate)

    return this_score


if __name__ == "__main__":
    subordinates = {
        1: [2, 3],
        2: [4],
        3: [],
        4: [5, 6],
        5: [7],
        6: [],
        7: [],
    }

    print(f'Número de pessoas subordinadas: {score(subordinates, 1)}')
    print(f'Número de pessoas subordinadas: {score(subordinates, 2)}')
    print(f'Número de pessoas subordinadas: {score(subordinates, 3)}')
    print(f'Número de pessoas subordinadas: {score(subordinates, 4)}')
    print(f'Número de pessoas subordinadas: {score(subordinates, 5)}')
    print(f'Número de pessoas subordinadas: {score(subordinates, 6)}')
    print(f'Número de pessoas subordinadas: {score(subordinates, 7)}')

    # Complexidade de Tempo =  O(n)
