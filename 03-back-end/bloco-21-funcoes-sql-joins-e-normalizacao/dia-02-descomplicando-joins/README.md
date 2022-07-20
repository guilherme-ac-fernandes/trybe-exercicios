### Descomplicando JOINs

####  Atividade de fixação:
> Para realizar os requisitos abaixo, restaure o seguinte banco de dados:

```
DROP SCHEMA IF EXISTS pixar;
CREATE SCHEMA pixar;
USE pixar;

CREATE TABLE theater (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL,
  location VARCHAR(30) NULL
);

CREATE TABLE movies (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL,
  theater_id INTEGER,
  FOREIGN KEY (theater_id) REFERENCES theater (id)
);

CREATE TABLE box_office (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL
);

INSERT INTO theater(name, location)
	VALUES ('Cinemark', 'São Paulo'),
			('Brodway theater', 'Nova York'),
			('Phoenix theater', 'Londres'),
            ('Le Champo', 'Paris'),
            ('TLC Chinese Theater', 'Los Angeles'),
            ('Regal Tikahtnu', 'Alaska');

INSERT INTO movies(title, director, year, length_minutes, theater_id)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81, 1),
         ('Vida de inseto', 'Andrew Staton', 1998, 95, 3),
         ('Ratatuille', 'Brad Bird', 2010, 115, NULL),
         ('UP', 'Pete Docter', 2009, 101, 2),
         ('Carros', 'John Lasseter', 2006, 117, NULL),
         ('Toy Story 2', 'John Lasseter', 1999, 93, 5),
         ('Valente', 'Brenda Chapman', 2012, 98, NULL),
         ('Monstros SA', 'Pete Docter', 2001, 92, NULL),
         ('Procurando Nemo', 'Jon Lasseter', 2003, 107, 4),
         ('Os Incríveis', 'Brad Bird', 2004, 116, NULL),
         ('WALL-E', 'Pete Docter', 2008, 104, NULL);


INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000),
         (8, 8.5, 300000000, 250000000),
         (10, 7.4, 460000000, 510000000),
         (9, 6.8, 450000000, 370000000),
         (11, 9.9, 290000000, 280000000);
```


Requisito 1 - Utilizando o `INNER JOIN`, encontre as vendas nacionais (`domestic_sales`) e internacionais (`international_sales`) de cada filme.

Requisito 2 - Utilizando o `INNER JOIN`, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (`international_sales`) do que vendas nacionais (`domestic_sales`).

Requisito 3 - Utilizando o `INNER JOIN`, faça uma busca que retorne os filmes e sua avaliação (`rating`) em ordem decrescente.

Requisito 4 - Utilizando o `LEFT JOIN`, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

Requisito 5 - Utilizando o `RIGHT JOIN`, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

Requisito 6 - Utilizando o `INNER JOIN`, selecione todas as informações dos filmes que estão em cartaz (possuem `theater_id` diferente de `NULL`) com avaliação maior que `8`.



