-- Active: 1666070927409@@127.0.0.1@3306@sakila
-- 1. Retorne o id de customer e a média de dias que uma pessoa usuária permanece com o produto alugado (tabela rental);
SELECT * FROM rental;
SELECT customer_id, ROUND(AVG(DATEDIFF(return_date,rental_date))) FROM rental GROUP BY customer_id;

-- 2. Retorne o tempo máximo, mínimo e a média de tempo dos filmes lançados em 2006 por rating (tabela film);
SELECT * FROM film;
SELECT MAX(length), MIN(length), AVG(length) FROM film WHERE release_year = 2006 GROUP BY rating;

-- 3. Quantas pessoas usuárias temos por cidade (tabela address);
SELECT COUNT(*), city FROM address a INNER JOIN city c ON a.city_id=c.city_id GROUP BY a.city_id;

-- 4. Qual o valor total (amount) recebido dentro de cada mês (tabela payment)?
SELECT * FROM payment;
SELECT SUM(amount), month(payment_date) FROM payment GROUP BY month(payment_date);

-- 5. Retorne a quantidade de itens alugados pelo preço (amount) que sejam menores ou iguais a 1.99 (tabela payment)
SELECT COUNT(*), amount FROM payment GROUP BY amount HAVING amount <= 1.99;


-- 6. Qual valor arrecadado (soma) por valor de produto que tem mais saída por mês e ano? (tabela payment)
-- SELECT COUNT(rental_id), rental_id FROM payment GROUP BY rental_id;

SELECT max(x.qt) totQt, max(x.am) totRental, x.mm, x.yy FROM (
  SELECT count(i.film_id) qt, i.film_id id, month(p.payment_date) mm, year(p.payment_date) yy, sum(p.amount) am
    FROM payment p 
      INNER JOIN rental r ON p.rental_id=r.rental_id
      INNER JOIN inventory i ON r.inventory_id = i.inventory_id
      INNER JOIN film f ON i.film_id=f.film_id
    GROUP BY i.film_id, month(p.payment_date), year(p.payment_date)
    ORDER BY year(p.payment_date), month(p.payment_date), count(i.film_id) DESC
) x 
GROUP BY x.yy, x.mm, x.qt HAVING x.qt = (
  SELECT max(z.qt) FROM (
    SELECT count(i.film_id) qt, i.film_id id, month(p.payment_date) mm, year(p.payment_date) yy, sum(p.amount) am
      FROM payment p 
      INNER JOIN rental r ON p.rental_id=r.rental_id
      INNER JOIN inventory i ON r.inventory_id = i.inventory_id
      INNER JOIN film f ON i.film_id=f.film_id
    GROUP BY i.film_id, month(p.payment_date), year(p.payment_date)
    ORDER BY year(p.payment_date), month(p.payment_date), count(i.film_id) DESC
  ) z 
  WHERE z.mm = x.mm AND z.yy = x.yy
  GROUP BY z.yy, z.mm
);
