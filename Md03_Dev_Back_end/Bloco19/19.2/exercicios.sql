-- Escreva uma query para exibir a string “This is SQL Exercise, Practice and Solution”.
SELECT "This is SQL Exercise, Practice and Solution" ;

-- Escreva uma query para exibir três números em três colunas.
SELECT 1, 2, 3;

-- Escreva uma query para exibir a soma dos números 10 e 15. 
SELECT 10 + 15;

-- Escreva uma query para exibir todas as informações de todos os cientistas.
SELECT * FROM Scientists;

-- Escreva uma query para exibir o nome como “Nome do Projeto” e as horas como “Tempo de Trabalho” de cada projeto.
SELECT Name AS "Nome do Projeto", SSN AS "Tempo de Trabalho" FROM Scientists;

-- Escreva uma query para exibir o nome dos cientistas em ordem alfabética. 
SELECT Name FROM Scientists ORDER BY Name;

-- Escreva uma query para exibir o nome dos projetos em ordem alfabética descendente.
SELECT Name FROM Projects ORDER BY Name DESC;

-- Escreva uma query que exiba a string 
-- “O projeto Name precisou de Hours horas para ser concluído.” para cada projeto. 
SELECT CONCAT("O projeto ", Name, " precisou de ", Hours,  " horas para ser concluído.") AS Resumo FROM Projects;

-- Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas. 
(SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 3) ORDER BY Name;

-- Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
SELECT DISTINCT Project FROM AssignedTo;

-- Escreva uma query para exibir o nome do projeto com maior quantidade de horas.alter
SELECT Name FROM Projects ORDER BY Hours DESC LIMIT 1;

-- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
SELECT Name FROM Projects ORDER BY Hours LIMIT 1 OFFSET 1;

-- Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas
SELECT * FROM Projects ORDER BY Hours LIMIT 5;

-- Escreva uma query que exiba a string 
-- “Existem Number cientistas na tabela Scientists.”, em que Number se refira a quantidade de cientistas. 
SELECT CONCAT("Existem ", COUNT(*), " cientistas na tabela Scientists.") FROM Scientists;