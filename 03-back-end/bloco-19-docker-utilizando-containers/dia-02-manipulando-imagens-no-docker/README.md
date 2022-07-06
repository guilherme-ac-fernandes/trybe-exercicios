### Manipulando Imagens no Docker

####  Atividade de fixação 1:
Vamos usar uma imagem disponível no `DockerHub` conhecida como `cowsay` (uma vaca falante no terminal 🐮)!
A ideia é deixarmos a mensagem para o `cowsay` parametrizável. Dessa forma, conseguiremos executar o seguinte comando:
```
docker container run cowsay Muuuuuuhhh
```

E teremos a seguinte saída no terminal:

```
____________
< Muuuuuuhhh >
------------
         \   ^__^
         \  (oo)\_______
            (__)\       )\/\
               ||----w |
               ||     ||
```

Requisito 1 - Crie um `Dockerfile` utilizando a imagem `chuanwen/cowsay`.

Requisito 2 - Defina um `ENTRYPOINT` para a execução do comando.

* Observe que o executável `cowsay` está no diretório `/usr/games/`.

Requisito 3 - Utilize o `CMD` para definir uma mensagem padrão.

Requisito 4 - Gere uma `build` e execute um `container` baseado em sua imagem sem passar nenhum comando.

Requisito 5 - Execute um novo container passando sua mensagem para testar. Além da mensagem você pode utilizar a opção `-l` para listar outros personagens disponíveis e então executar algo como `docker container run cowsay -f dragon-and-cow "VQV TRYBE”`, para exibir um dragão junto com a vaquinha.

