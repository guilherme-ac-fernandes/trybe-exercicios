###  Atividade de fixação 2:

Requisito 1 - A partir da API do requisito anterior, faça as modificações para responder a uma nova mensagem:

* Crie uma nova variável de ambiente com um texto qualquer.

* Modifique o código da sua API para que ela responda na rota `GET /` com o mesmo texto contido na variável criada no passo anterior.

Requisito 2 - Simule o `deploy` em multi-ambientes (produção e homologação). Para isso:

* Renomeie o `remote` do `deploy` do requisito anteriores para homolog.

* Crie um novo `remote` a partir da mesma aplicação. Dessa vez, o `remote` deverá se chamar `prod`.

* Em seguida, configure as variáveis de ambiente para terem valores diferentes por ambiente.

