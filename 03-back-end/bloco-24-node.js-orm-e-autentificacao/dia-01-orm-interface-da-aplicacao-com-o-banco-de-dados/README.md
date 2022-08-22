### ORM - Interface da aplicação com o banco de dados

####  Atividade de fixação:
> Este exercício deverá criar um API simples, onde será possível criar um livro ou listar todos os livros da base de dados.
>
> Realize os seguintes passos para realizar os requisitos:
> 1 - Crie uma nova pasta e inicie um projeto com Express: `npm init -y` e `npm install express`.
> 2 - Crie o arquivo `index.js`.
> 3 - Instale o pacote `sequelize` e o `mysql2`: `npm install sequelize mysql2`.
> 4 - Instale o pacote `sequelize-cli` como uma dependência de desenvolvimento: `npm install --save-dev sequelize-cli`.
> 5 - Use o `sequelize-CLI` para iniciar a configuração do ORM: `npx sequelize-cli init`.
> 6 - Garanta que tem um servidor `MySQL` rodando e coloque todas as configurações de acesso dentro do arquivo `config/config.js`.
> 7 - Crie o arquivo index.js com a estrutra básica de uma API com Express.
> ```
> const express = require('express');
> const app = express();
> const PORT = process.env.PORT || 3000;
>
> app.use(express.json());
>
> app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
> ```

Requisito 1 - 
