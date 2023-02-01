## Nó e Listas Encadeadas

####  Atividade de fixação:
> Dentro da pasta `src` crie os arquivos `script-01.py` a `script-04.py` para resolução dos requisitos:

**Observação**: Faça a análise de complexidade de tempo da solução dos requisitos abaixo.

Requisito 1 - Aprimorando a classe `Lista`: essa classe `Lista` atende as principais operações que essa `TAD` nos oferece, mas que tal melhorarmos? Para isso, você deve adicionar os seguintes métodos:

1. A operação `clear` nos permite remover todos os `Nodes` da lista.

2. A operação `__get_node_at` nos permite acessar o `Node` em qualquer posição da lista.

> Após criada as operações anteriores, refatore os seguintes métodos para que utilizem a `__get_node_at` ante iterações:
> * insert_at;
> * insert_last;
> * remove_last;
> * remove_at;
> * get_element_at.


Requisito 2 - Nova busca: até o momento essa estrutura consulta elementos através da posição. Nesta atividade será necessário criar uma função chamada `def index_of(self, value)`, onde ela será responsável por consultar na lista a existência do valor informado e retornar a posição da primeira ocorrência. Caso o valor não exista, considere retornar `-1`. Esta função deve respeitar a complexidade `O(n)`.

Requisito 3 - Remover duplicatas de uma `LinkedList`, atividade extraída e adaptada do [LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-list/). Nesse requisito será necessário implementar um algoritmo que receba uma `LinkedList` como argumento e retorne uma nova lista sem elementos duplicados. Esta função deve respeitar a complexidade `O(n)`.

```
Exemplo:

# input: 1 -> 1 -> 2
# saída: 1 -> 2

# input: 1 -> 1 -> 2 -> 3 -> 3
# saída: 1 -> 2 -> 3
```

Requisito 4 - Remover duplicatas de uma `DoublyLinkedList`, atividade extraída e adaptada do [LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/). Nesse requisito será necessário implementar um algoritmo que receba uma `DoublyLinkedList como argumento e retorne uma nova lista, sem elementos que possuem mais de uma ocorrência.

```
Exemplo:

# input: 1 <-> 1 <-> 2
# saída: 2

# input: 1 <-> 1 <-> 2 <-> 3 <-> 3
# saída: 2

# input: 1 <-> 2 <-> 3 <-> 3
# saída: 1 <-> 2
```

