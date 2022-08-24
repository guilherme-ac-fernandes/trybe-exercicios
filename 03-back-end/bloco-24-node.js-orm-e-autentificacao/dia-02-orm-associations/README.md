### ORM - Associations

####  Atividade de fixação:
> A partir do _[repositório](https://github.com/tryber/exercise-sequelize-associations)_ realize o seguinte requisito:

**Observação:** Realize os seguintes comandos para criação e popular o banco de dados.
```
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```

Requisito 1 - Crie o `model` de `Plans`.

Requisito 2 - Crie o `model` de `Patients`.

Requisito 3 - Crie o `model` de `Surgeries`.

Requisito 4 - Crie o `model` de `Patient_surgeries`.

Requisito 5 - Crie um `endpoint` que liste todos os pacientes e seus respectivos planos.

Requisito 6 - Crie um `endpoint` que liste todos os pacientes e suas respectivas cirurgias realizadas.

Requisito 7 - Crie um `endpoint` que de acordo com o `id` de um plano, que deve ser recebido via requisição, liste os pacientes que o possuem.

Requisito 8 - Crie um `endpoint` capaz de adicionar um novo paciente.

Requisito 9 - Crie um `endpoint` que liste todos os pacientes e suas cirurgias realizadas, mas oculte o nome do médico responsável.

Requisito 10 - Crie um `endpoint` que de acordo com o nome do médico, que deve ser recebido via requisição, liste todas as cirurgias realizadas pelo mesmo, um `get` na `url` `http://localhost:3000/surgeries/Rey%20Dos%20Santos`deve retornar as cirurgias realizadas pelo médico `Rey Dos Santos`.

