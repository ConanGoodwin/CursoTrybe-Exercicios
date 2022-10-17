-- Seleciona todas as pessoas que tem o mesmo nome, mesmo que tenham sobrenomes diferente
SELECT first_name, last_name FROM sakila.actor a
WHERE (SELECT COUNT(*) FROM sakila.actor b WHERE a.first_name=b.first_name) > 1 
ORDER BY first_name;

-- Seleciona todas as pessoas que tem o mesmo nome e mesmo sobrenome
SELECT DISTINCT(first_name), last_name FROM sakila.actor a
WHERE
 (SELECT COUNT(*) FROM sakila.actor b
 WHERE a.first_name=b.first_name
 AND a.last_name=b.last_name) > 1;