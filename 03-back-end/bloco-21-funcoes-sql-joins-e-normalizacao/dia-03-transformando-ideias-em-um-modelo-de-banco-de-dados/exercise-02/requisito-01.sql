-- CREATE DATABASE IF NOT EXISTS zoo;
DROP DATABASE IF EXISTS zoo;
CREATE DATABASE zoo;
USE zoo;

CREATE TABLE localizacao(
  localizacao_id INT PRIMARY KEY AUTO_INCREMENT,
  lugar VARCHAR(50) NOT NULL
);

CREATE TABLE especie(
  especie_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL
);

CREATE TABLE animais(
  animal_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) UNIQUE NOT NULL,
  especie_id INT NOT NULL,
  localizacao_id INT NOT NULL,
  sexo VARCHAR(50),
  idade INT,
  FOREIGN KEY (especie_id) REFERENCES especie(especie_id),
  FOREIGN KEY (localizacao_id) REFERENCES localizacao(localizacao_id)
);

CREATE TABLE gerente(
  gerente_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL
);

CREATE TABLE cuidadores(
  cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  gerente_id INT NOT NULL,
  FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
);

CREATE TABLE cuidadores_animais(
  id INT PRIMARY KEY AUTO_INCREMENT,
  cuidador_id INT NOT NULL,
  animal_id INT NOT NULL,
  FOREIGN KEY (cuidador_id) REFERENCES cuidadores(cuidador_id),
  FOREIGN KEY (animal_id) REFERENCES animais(animal_id)
);

INSERT INTO localizacao(lugar)
VALUES('Recanto das Aves'),
      ('Bosque dos Felinos'),
      ('Savanna na Cidade'),
      ('Floresta Encantada');

INSERT INTO especie(nome)
VALUES('Arara Azul'),
      ('Onça'),
      ('Leão'),
      ('Elefante'),
      ('Macaco');

INSERT INTO animais(nome, especie_id, localizacao_id, sexo, idade)
VALUES('Momo', 5, 4, 'Masculino', 3),
      ('Juma', 2, 2, 'Feminino', 6),
      ('Harry', 1, 1, 'Masculino', 1),
      ('Emma', 4, 3, 'Feminino', 7);

INSERT INTO gerente(nome)
VALUES('Zelda'),
      ('Link');

INSERT INTO cuidadores(nome, gerente_id)
VALUES('Peter', 1),
      ('Jack', 2),
      ('Ron', 1);

INSERT INTO cuidadores_animais(cuidador_id, animal_id)
VALUES(1, 1),
      (2, 2),
      (2, 3), 
      (3, 4);