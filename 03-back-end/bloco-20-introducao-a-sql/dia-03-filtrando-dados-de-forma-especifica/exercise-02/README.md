
###  Atividade de fixação 2:
> Para realizar os requisitos abaixo, restaure o seguinte banco de dados de uso livre (licenciado de acordo com desse _[termo](https://creativecommons.org/licenses/by-sa/3.0/)_):


```
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  code CHAR(4),
  name CHAR(50) NOT NULL,
  hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  scientist INT NOT NULL,
  project CHAR(4) NOT NULL,
  PRIMARY KEY (scientist, project),
  FOREIGN KEY (scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (project) REFERENCES Projects (code)
);

INSERT INTO Scientists(SSN, name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (code, name, hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (scientist, project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
```


Requisito 1 - Escreva uma `query` para exibir todas as informações de todos os cientistas que possuam a letra `e` em seu nome.

Requisito 2 - Escreva uma `query` para exibir o nome de todos os projetos cujo o código inicie com a letra `A`. Ordene o resultado em ordem alfabética.

Requisito 3 - Escreva uma `query` para exibir o código e nome de todos os projetos que possuam em seu código o `número 3`. Ordene o resultado em ordem alfabética.

Requisito 4 - Escreva uma `query` para exibir todos os cientistas (valores numéricos) cujos projetos sejam `AeH3`, `Ast3` ou `Che1`.

Requisito 5 - Escreva uma `query` para exibir todas as informações de todos os projetos com mais de `500 horas`.

Requisito 6 - Escreva uma `query` para exibir todas as informações de todos os projetos cujas horas sejam `maiores que 250 e menores 800`.

Requisito 7 - Escreva uma `query` para exibir o nome e o código de todos os projetos cujo nome `NÃO` inicie com a letra `A`.

Requisito 8 - Escreva uma `query` para exibir o nome de todos os projetos cujo código contenha a letra `H`.
