-- Active: 1666070927409@@127.0.0.1@3306@sakila
SELECT * FROM staff;

-- Insira um novo funcionário na tabela sakila.staff.
-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione Table Inspector.
-- Clique na aba columns e verifique quais campos aceitam nulos para te guiar.
-- Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa exploração!
INSERT INTO staff (first_name, last_name, address_id, store_id, username)
 VALUES ('Conan', 'Goodwin', 3, 1, 'conan');


-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query. 
INSERT INTO staff (first_name, last_name, address_id, store_id, username)
 VALUES
  ('Ian', 'Zwanck', 3, 2, 'ian'), 
  ('Lais','NaoSei', 4, 2, 'lais');


-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor. 
SELECT * FROM actor;
INSERT INTO actor (first_name, last_name) SELECT first_name, last_name FROM customer LIMIT 5;


-- Cadastre três categorias de uma vez só na tabela sakila.category. 
SELECT * FROM category;
INSERT INTO category (name) VALUES
('NEWEIRD'),
('WESTER'),
('TRASH');