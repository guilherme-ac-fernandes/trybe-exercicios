###  Atividade de fixação 2:
> Para realizar os requisitos abaixo, restaure o seguinte banco de dados de uso livre (licenciado de acordo com desse _[termo](https://creativecommons.org/licenses/by-sa/3.0/)_):

```
DROP SCHEMA IF EXISTS PiecesProviders;
CREATE SCHEMA PiecesProviders;
USE PiecesProviders;

CREATE TABLE Pieces (
  code INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE Providers (
  code VARCHAR(40) PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE Provides (
  piece INTEGER,
  FOREIGN KEY (piece) REFERENCES Pieces (code),
  provider VARCHAR(40),
  FOREIGN KEY (provider) REFERENCES Providers (code),
  price INTEGER NOT NULL,
  PRIMARY KEY (piece , provider)
);

INSERT INTO Providers(code, name)
  VALUES ('HAL', 'Clarke Enterprises'),
    ('RBT', 'Susan Calvin Corp.'),
    ('TNBC', 'Skellington Supplies');

INSERT INTO Pieces(code, name)
  VALUES (1, 'Sprocket'),
    (2, 'Screw'),
    (3, 'Nut'),
    (4, 'Bolt');

INSERT INTO Provides(piece, provider, price)
  VALUES (1, 'HAL', 10),
    (1, 'RBT', 15),
    (2, 'HAL', 20),
    (2, 'RBT', 25),
    (2, 'TNBC', 14),
    (3, 'RBT', 50),
    (3, 'TNBC', 45),
    (4, 'HAL', 5),
    (4, 'RBT', 7);
```


Requisito 1 - Escreva uma `query` para exibir a peça e o preço de tudo que é provido pela empresa `RBT`.

Requisito 2 - Escreve uma `query` para exibir todas as informações das cinco peças com os maiores preços.

Requisito 3 - Escreva uma `query` para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.

Requisito 4 - Escreva uma `query` para exibir todas as informações das peças que são providas pela empresa `HAL`. Ordene o resultado pelos preços das peças de forma decrescente.

Requisito 5 - Escreva uma `query` para exibir por quantas empresas a peça 1 é provida.




