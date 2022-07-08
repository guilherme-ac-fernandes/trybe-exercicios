###  Atividade de fixação 6:

Crie um arquivo Compose para subir o Wordpress com MySQL.

Requisito 1 - Utilize a imagem `wordpress:latest` e `mysql:5.7`.

Requisito 2 - Faça `bind` da porta `80` do container do `wordpress` para `8080` do host.

Requisito 3 - Defina as seguintes variáveis para o `wordpress`:

* WORDPRESS_DB_HOST: db:3306

* WORDPRESS_DB_USER: wordpress

* WORDPRESS_DB_PASSWORD: wordpress

* WORDPRESS_DB_NAME: wordpress

Requisito 4 - Defina as seguintes variáveis para o `mysql`:

* MYSQL_ROOT_PASSWORD: somewordpress

* MYSQL_DATABASE: wordpress

* MYSQL_USER: wordpress

* MYSQL_PASSWORD: wordpress

Requisito 5 - Defina o volume `db_data` para o `mysql`.

Requisito 6 - Utilize o parâmetro `depends_on` para criar dependência entre os serviços.

Requisito 7 - Adicione a política de `restart` com o valor `always` aos serviços.

Requisito 8 - Suba os serviços utilizando `docker-compose` e abra no terminal para validar o funcionamento.


