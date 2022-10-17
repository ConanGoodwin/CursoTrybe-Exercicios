-- Active: 1666032307766@@127.0.0.1@3306@sakila
-- Como você faria, então, para encontrar, usando o IN, todos os detalhes sobre o aluguel 
--dos clientes com os seguintes ids: 269, 239, 126, 399, 142? As informações podem ser encontradas na tabela payment.
SELECT * FROM payment WHERE customer_id IN (269, 239, 126, 399, 142);

-- Como encontraria todas as informações sobre os endereços que estão registrados nos distritos de
-- QLD, Nagasaki, California, Attika, Mandalay, Nantou e Texas? As informações podem ser encontradas na tabela address
SELECT * FROM address WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou',  'Texas');

-- Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes:
-- hicks, crawford, henry, boyd, mason, morales e kennedy, ordenados por nome em ordem alfabética. 
SELECT first_name, last_name, email FROM customer WHERE last_name IN ('HICKS', 'CRAWFORD', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;

-- Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética. 
SELECT email FROM customer WHERE address_id IN (172, 173, 174, 175, 176) ORDER BY email;

-- Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005. Lembre-se de que, no banco de dados,
-- as datas estão armazenadas no formato ano/mês/dia, diferente do formato brasileiro, que é dia/mês/ano. 

SELECT COUNT(*) FROM payment WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';