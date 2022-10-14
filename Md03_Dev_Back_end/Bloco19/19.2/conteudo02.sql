SELECT * FROM sakila.actor;
SELECT concat(first_name, last_name) FROM sakila.actor;
SELECT concat(first_name, ' ', last_name) FROM sakila.actor;
SELECT concat(first_name, ' ', last_name) AS 'Nome Completo' FROM sakila.actor;
SELECT concat(title, ' ', release_year) AS 'Ano de lançamento' FROM sakila.film;
SELECT concat(title, ' ', rating) AS 'Classificação' FROM sakila.film;
SELECT * FROM sakila.address;
SELECT concat(address, ' ', district) AS 'Endreço' FROM sakila.address;