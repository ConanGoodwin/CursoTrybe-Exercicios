-- Active: 1666070927409@@127.0.0.1@3306@sakila

    -- Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
  SELECT a.actor_id, concat(a.first_name,' ',a.last_name) AS nome,  fa.film_id
  FROM actor a INNER JOIN film_actor fa ON a.actor_id = fa.actor_id;

    -- Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
  SELECT concat(st.first_name,' ',st.last_name) AS nome, ad.address FROM staff st INNER JOIN address ad ON st.address_id = ad.address_id;

    -- Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente,
    -- juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
  SELECT c.customer_id, concat(c.first_name,' ',c.last_name) AS nome, c.email, c.address_id, ad.address 
  FROM customer c INNER JOIN address ad ON c.address_id = ad.address_id
  ORDER BY c.first_name DESC, c.last_name DESC LIMIT 100;

    -- Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm “rene” em seus nomes.
    -- As informações podem ser encontradas nas tabelas address e customer.
  SELECT concat(c.first_name,' ',c.last_name) AS nome, c.email, c.address_id, ad.address, ad.district
  FROM customer c INNER JOIN address ad ON c.address_id = ad.address_id
  WHERE c.first_name LIKE '%RENE%' AND ad.district = 'CALIFORNIA';

    -- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente.
    -- Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
  SELECT c.first_name, c.last_name, COUNT(ad.address_id)
  FROM customer c INNER JOIN address ad ON c.address_id = ad.address_id
  WHERE c.active = 1 
  GROUP BY c.first_name, c.last_name
  ORDER BY c.first_name DESC, c.last_name DESC;

    -- Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006.
    -- Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
  SELECT st.first_name, st.last_name, ROUND(AVG(py.amount), 2) 
  FROM staff st INNER JOIN payment py ON st.staff_id = py.staff_id
  WHERE year(py.payment_date) = '2006'
  GROUP BY st.first_name, st.last_name;

    -- Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film.
    -- Dica: você precisará fazer mais de um JOIN na mesma query
  SELECT ac.actor_id, ac.first_name, ac.last_name, fa.film_id, fm.title 
  FROM actor ac
  INNER JOIN film_actor fa ON ac.actor_id = fa.actor_id
  INNER JOIN film fm ON fa.film_id = fm.film_id;
  --teste