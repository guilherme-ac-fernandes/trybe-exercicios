
###  Atividade de fixação 5:

Agora vamos criar um novo arquivo Compose para rodarmos uma aplicação React.

Requisito 1 - Inicie um novo projeto `ReactJS` utilizando o `create-react-app`.

Requisito 2 - Crie o `Dockerfile`, conforme vimos na aula passada.

Requisito 3 - Crie um novo arquivo Compose utilizando a versão 3.

Requisito 4 - Defina um serviço no arquivo para nosso app. Para isso, utilize a opção `build` para apontar para o `Dockerfile`.

Requisito 5 - Publique a porta exposta no `Dockerfile` fazendo `bind` para a porta `8080` do `localhost`.

Requisito 6 - Para simularmos o processo de desenvolvimento, faça a alteração em alguma parte do código do `app react`. Então, execute o comando para subir o serviço novamente, "rebuildando" a imagem para aplicar as alterações

