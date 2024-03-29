# API em Django

<p align="center">
  <img src="./django.png" alt="Django"/>
</p>

### Instruções

```
Para instalar as dependências e iniciar as aplicações:
<-- na raiz do projeto -->
python3 -m venv .venv // para criar o ambiente virtual
source .venv/bin/activate // para ativar o ambiente virtual
python3 -m pip install -r dev-requirements.txt // instalação das dependências


Para rodar o servidor da aplicação:
<-- na raiz do projeto -->
python3 manage.py runserver

Aplicação estará disponível na url: http://127.0.0.1:8000 
```

<br />

### Endpoints

| Endpoints | URL |
|---|---|
| `admin` | `http://127.0.0.1:8000/admin/` |
| `api` | `http://127.0.0.1:8000/api/` |


No endpoint `/api` contém as seguintes rotas:

```
{
    "users": "http://127.0.0.1:8000/api/users/",
    "tasks": "http://127.0.0.1:8000/api/tasks/"
}
```