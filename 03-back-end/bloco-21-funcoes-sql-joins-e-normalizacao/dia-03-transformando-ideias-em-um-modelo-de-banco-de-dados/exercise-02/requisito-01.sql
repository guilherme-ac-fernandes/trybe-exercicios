-- CREATE DATABASE IF NOT EXISTS zoo;
DROP DATABASE IF EXISTS zoo;
CREATE DATABASE zoo;
USE zoo;

CREATE TABLE animais(
  animal_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) UNIQUE NOT NULL,
  especie VARCHAR(50) NOT NULL,
  sexo VARCHAR(50),
  idade INT,
  localizacao VARCHAR(50) NOT NULL
);

CREATE TABLE gerente(
  gerente_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
);

CREATE TABLE cuidadores(
  cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  gerente_id INT NOT NULL,
  FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
);

CREATE TABLE cuidadores_animais(
  id INT PRIMARY KEY AUTO_INCREMENT,
  cuidador_id INT NOT NULL
  animal_id INT NOT NULL,
  FOREIGN KEY (cuidador_id) REFERENCES cuidadores(cuidador_id),
  FOREIGN KEY (animal_id) REFERENCES animais(animal_id)
);
