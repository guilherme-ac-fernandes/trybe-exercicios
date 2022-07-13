###  Atividade de fixação 1:
> Para realizar os exercícios do 1 ao 15, restaure o seguinte banco de dados de uso livre (licenciado de acordo com desse _[termo](https://creativecommons.org/licenses/by-sa/3.0/)_):

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

INSERT INTO Scientists(SSN,name)
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


Requisito 1 - Escreva uma `query` para exibir a string `”This is SQL Exercise, Practice and Solution”`.

Requisito 2 - Escreva uma `query` para exibir três números em três colunas.

Requisito 3 - Escreva uma `query` para exibir a soma dos números 10 e 15.

Requisito 4 - Escreva uma `query` para exibir o resultado de uma expressão aritmética qualquer.

Requisito 5 - Escreva uma `query` para exibir todas as informações de todos os cientistas.

Requisito 6 - Escreva uma `query` para exibir o nome como `”nome_do_projeto”` e as horas como `”tempo_de_trabalho”` de cada projeto.

Requisito 7 - Escreva uma `query` para exibir o nome dos cientistas em ordem alfabética.

Requisito 8 - Escreva uma `query` para exibir o nome dos projetos em ordem alfabética descendente.

Requisito 9 - Escreva uma `query` que exiba a string `”O projeto name precisou de hours horas para ser concluído.”` para cada projeto.

Requisito 10 - Escreva uma `query` para exibir o nome e as horas dos três projetos com a maior quantidade de horas.

Requisito 11 - Escreva uma `query` para exibir o código de todos os projetos da tabela `AssignedTo` sem que haja repetições.

Requisito 12 - Escreva uma `query` para exibir o nome do projeto com maior quantidade de horas.

Requisito 13 - Escreva uma `query` para exibir o nome do segundo projeto com menor quantidade de horas.

Requisito 14 - Escreva uma `query` para exibir todas as informações dos cinco projetos com a menor quantidade de horas.

Requisito 15 - Escreva uma `query` que exiba a string `”Existem Number cientistas na tabela Scientists.”`, em que Number se refira a quantidade de cientistas.


