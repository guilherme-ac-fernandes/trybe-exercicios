### Deploy Docker & Heroku

####  Atividade de fixação:
> A partir dos repositórios _[front-end](https://github.com/tryber/herocker-exercise-frontend)_ e  _[back-end](https://github.com/tryber/herocker-exercise-backend)_ realize os seguinte requisitos:

Requisito 1 - Realize o `deploy` de uma aplicação `Front-end` no Heroku utilizando um `build-pack`.

Requisito 2 - Realize o `deploy` de uma API Node no Heroku utilizando Docker.

Requisito 3 - Crie um banco de dados no `SUPABASE`.

Requisito 4 - Configure as variáveis de ambiente do Back-end. O arquivo de configuração do `sequelize` está no caminho `/src/sequelize/config/config.js`.

Requisito 5 - Conecte sua aplicação back-end ao banco de dados.

* Use o script `utils/testSequelizeConnection.js` para testar sua conexão.

* Crie uma rota para fornecer as informações das pessoas usuárias retornadas diretamente do banco de dados.

Requisito 6 - Popule o banco de dados com informações de pessoas usuárias ou qualquer tipo de dados que viram uma tabela.

* Valide os próximos passos pela interface do `SUPABASE`.

* Use `npx sequelize-cli db:migrate` para fazer a migração e criar as tabelas no banco.

* Para o popular o banco você pode usar `npx sequelize-cli db:seed:all`.

Requisito 7 - Consuma sua API pela aplicação front-end e renderize todas as informações retornadas da API.

* Será necessário configurar o CORS.

Requisito 8 - Crie Actions do Github de `lint` para Front-end e Back-end.

Requisito 9 - Front-end: Action para gerar preview.

Requisito 10 - Rode o front-end usando Dockerfile.

Requisito 11 - Back-end: Action de teste com Jest.

Requisito 12 - Criar um `pipeline` no Heroku.

