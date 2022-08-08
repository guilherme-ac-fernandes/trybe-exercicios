###  Atividade de fixação 2:
> A partir da aplicação criada no exercício um, realize as seguintes modificações:

Requisito 1 - Utilize uma API externa para buscar CEPs que não existem no banco de dados.

* Quando um CEP não existir no banco de dados, utilize a API `https://viacep.com.br/ws/[numero-do-cep]/json/` para obter suas informações.

* Caso o CEP não exista na API externa, você receberá o `JSON { "erro": true }`. Nesse caso, retorne status `404 Not Found` com o seguinte `JSON`:

```
{ "error": { "code": "notFound", "message": "CEP não encontrado" } }
```

* Caso o CEP exista na API externa, armazene-o no banco e devolva seus dados no seguinte formato:

```
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
```

Requisito 2 - Cadastre simultaneamente CEPs e bairros utilizando uma API externa:

* Vamos utilizar um segundo banco de dados para esse requisito: 

```
CREATE DATABASE IF NOT EXISTS cep_lookup2;

USE cep_lookup2;

CREATE TABLE IF NOT EXISTS bairros (
  id INT NOT NULL AUTO_INCREMENT,
  bairro VARCHAR(20) NOT NULL,
  localidade VARCHAR(20) NOT NULL,
  uf VARCHAR(2) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS ceps (
  cep VARCHAR(8) NOT NULL,
  logradouro VARCHAR(50) NOT NULL,
  bairro_id INT NOT NULL,
  FOREIGN KEY (bairro_id) REFERENCES bairros(id),
  PRIMARY KEY (cep)
);
```

* Note que, nessa nova tabela, em vez de trazermos as informações que são comuns aos CEPs associados a um mesmo bairro, temos agora uma segunda tabela bairros onde cadastraremos o nome, a localidade e a UF do mesmo.

* Quando um CEP não existir no banco de dados, utilize a API externa para obter suas informações.

* Utilize os dados provindos da API para cadastrar ou buscar os dados do bairro (caso este já esteja cadastrado).

* Com tudo armazenado corretamente, devolva os dados no seguinte formato:


```
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
```


