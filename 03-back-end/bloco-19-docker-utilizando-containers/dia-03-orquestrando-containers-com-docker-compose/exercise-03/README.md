###  Atividade de fixação 3:

> Baseado na atividade de fixação 2, realize os seguintes requisito.

Por padrão, o `ghost` utiliza um `sqlite` interno para salvar as informações, porém vamos alterar esse comportamento para exercitar nossos conhecimentos:

Requisito 1 - Crie um novo serviço para o nosso banco de dados. Nesse caso, podemos utilizar um `mysql`, portanto use a imagem `mysql:5.7`.

Requisito 2 - Precisamos definir uma senha `root` para o nosso `db`. Para isso, utilize a variável `MYSQL_ROOT_PASSWORD` e lembre-se que é possível utilizar a sintaxe `${}` para passar uma `env` do host para a `env` do `container`.

Requisito 3 - Agora precisamos configurar nosso service com o `ghost` para utilizar o `MySQL`. Para isso, defina a variável `database__client` para `mysql`.

Requisito 4 - Defina o nome `ghost` para o nome do database utilizando a variável `database__connection__database`.

Requisito 5 - Então, indique a conexão para o nosso `MySQL` na `env` `database__connection__host`.

Requisito 6 - Para definir a pessoa usuária (root) e senha (a mesma que definimos no nosso `MySQL`), utilize respectivamente as `envs` `database__connection__user` e `database__connection__password`.

Requisito 7 - Utilize a opção `depends_on` para criar relações de dependências entre os serviços.

Requisito 8 - Suba o ambiente com o novo arquivo usando o `docker-compose` e então acesse a porta.
