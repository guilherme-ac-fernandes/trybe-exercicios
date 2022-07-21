-- CREATE DATABASE IF NOT EXISTS normalization;
DROP DATABASE IF EXISTS normalization;
CREATE DATABASE normalization;
USE normalization;

CREATE TABLE setor(
  setor_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL
);

CREATE TABLE funcionario(
  funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  sobrenome VARCHAR(100) NOT NULL,
  contato VARCHAR(150),
  telefone VARCHAR(20) NOT NULL,
  data_cadastro TIMESTAMP DEFAULT NOW()
);

CREATE TABLE funcionario_setor(
  id INT PRIMARY KEY AUTO_INCREMENT,
  setor_id INT NOT NULL,
  funcionario_id INT NOT NULL,
  FOREIGN KEY (setor_id) REFERENCES setor(setor_id),
  FOREIGN KEY (funcionario_id) REFERENCES funcionario(funcionario_id)
);

INSERT INTO setor(nome)
VALUES('Administração'),
      ('Vendas'),
      ('Operacional'),
      ('Estratégico'),
      ('Marketing');

INSERT INTO funcionario (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro)
VALUES(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
      (13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
      (14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
      (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

INSERT INTO funcionario_setor (funcionario_id, setor_id) 
VALUES(12, 1),
      (12, 2),
      (13, 3),
      (14, 4),
      (14, 2),
      (15, 5);
