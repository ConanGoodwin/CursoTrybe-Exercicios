-- SELECT first_name AS 'fname' FROM sakila.actor 
-- WHERE (SELECT COUNT(*) FROM sakila.actor WHERE first_name='fname') > 1;
USE sakila;
SELECT first_name AS fname FROM (SELECT first_name AS fname2 FROM actor WHERE fname2=fname);
