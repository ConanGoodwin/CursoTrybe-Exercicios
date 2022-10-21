SELECT * FROM sakila.inventory order by inventory_id;
SELECT * FROM sakila.payment p inner join sakila.rental r ON p.rental_id=r.rental_id;
select * from sakila.rental r inner join inventory i on r.inventory_id = i.inventory_id;
SELECT * FROM sakila.inventory i inner join sakila.film f on i.film_id=f.film_id;

SELECT count(i.film_id) qt, i.film_id, month(p.payment_date) mm, year(p.payment_date) yy, sum(p.amount) am
FROM sakila.payment p 
inner join sakila.rental r ON p.rental_id=r.rental_id
inner join inventory i on r.inventory_id = i.inventory_id
inner join sakila.film f on i.film_id=f.film_id
group by i.film_id, month(p.payment_date), year(p.payment_date) having qt = 7
order by year(p.payment_date), month(p.payment_date), count(i.film_id) DESC;

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

SELECT count(i.film_id) qt, i.film_id id, month(p.payment_date) mm, year(p.payment_date) yy, sum(p.amount) am
    FROM payment p 
      INNER JOIN rental r ON p.rental_id=r.rental_id
      INNER JOIN inventory i ON r.inventory_id = i.inventory_id
      INNER JOIN film f ON i.film_id=f.film_id
    GROUP BY i.film_id, month(p.payment_date), year(p.payment_date)
    ORDER BY year(p.payment_date), month(p.payment_date), count(i.film_id) DESC;