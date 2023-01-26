## Comandos - Passo a Passo

<br />

1. Criação do ambiente virtual:
```
python3 -m venv .venv
```

2. Ativação do ambiente virtual:
```
source .venv/bin/activate
```

3. Instalação das dependências:
```
python3 -m pip install -r dev-requirements.txt
```

4. Configuração inicial do projeto Django:
```
django-admin startproject config .
```

5. Inicialização aplicação:
```
python3 manage.py runserver
```

6. Realizar as migrações:
```
python3 manage.py migrate
```

7. Criar usuário administrador:
```
python3 manage.py createsuperuser

- username: admin
- password: admin123
```

8. Criação de novo módulo(app) para lista de tarefa:
```
django-admin startapp todo
```

9. Converte classes criadas em tabelas e importa para o banco de dados:
```
python3 manage.py makemigrations
python3 manage.py migrate
```

9. Para abrir um terminal interativo do django e criar um usuário:
```
python3 manage.py shell

>>> from todo.models import User
>>> 
>>> guilherme = User(name="Guilherme")
>>> guilherme.save()
>>> exit()
```

