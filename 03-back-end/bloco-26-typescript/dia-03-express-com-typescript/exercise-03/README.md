###  Atividade de fixação 3:

Requisito 3 - Crie um CRUD completo de produtos.

**Objetivos:**

* Listar os produtos por faixa de preço.

* Listar os produtos que ainda não estão vencidos.

* Utilize a tabela `Products` para realizar a atividade.

**Rotas:**

* Uma rota que lista todos os produtos.

* Uma rota que lista um único produto por meio de seu `id`.

* Uma rota que permite cadastrar um novo produto.

* Uma rota que permite editar o registro de um produto cadastrado.

* Uma rota que permite deletar um produto a partir de seu `id`.

* Uma rota que recebe via `query params` um preço inicial e final e listar todos produtos que se encaixem no filtro.

* Uma rota que lista somente os produtos que ainda não estão vencidos.

**Regras:**

* Um produto deve possuir as propriedades `id`, `nome`, `nome da marca`, `preço`, `data de fabricação` e `data de validade`.

* Nenhuma propriedade de um produto pode ser nula ou vazia.

* O nome da marca deve possuir pelo menos 3 caracteres.

* O preço não pode receber um valor negativo.

* A data de fabricação não pode ser igual a data de validade.

* As `query params` de valor de preço inicial e final não podem receber valores negativos.

