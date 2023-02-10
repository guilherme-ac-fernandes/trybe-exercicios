# Resolução proveniente do dabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43
# b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474
# 070/section/2ced8aa4-70a8-4d1b-bce3-cd9901f55a29/day/205a92d2
# -72de-4ddd-a800-b969f28794c5/lesson/f6ed0e4a-65e8-479f-a920-0
# 76d7ce1b4d8
def nota_partida(escolhas, adivinhas):
    return max(escolhas.difference(adivinhas))


def nota_redutor(escolhas, adivinhas):
    return min(escolhas.difference(adivinhas))


def nota_individual(escolhas, adivinhas):
    set_escolhas = set(escolhas)
    set_adivinhas = set(adivinhas)

    return nota_partida(set_escolhas, set_adivinhas) - nota_redutor(
        set_escolhas, set_adivinhas
    )


def quem_ganhou_blefe(jogadas):
    jogadores = list(jogadas.keys())

    primeira_nota = nota_individual(
        jogadas[jogadores[0]], jogadas[jogadores[1]]
    )

    segunda_nota = nota_individual(
        jogadas[jogadores[1]], jogadas[jogadores[0]]
    )

    if primeira_nota > segunda_nota:
        return jogadores[0]
    elif primeira_nota < segunda_nota:
        return jogadores[1]
    else:
        return None


if __name__ == "__main__":
    entrada = {
        'Clara': [0, 1, 5, 9, 10],
        'Marco': [0, 2, 8, 9, 10]
    }

    quem_ganhou = quem_ganhou_blefe(entrada)

    if quem_ganhou:
        print(f"Quem ganhou: {quem_ganhou} ")
    else:
        print("Deu empate")
