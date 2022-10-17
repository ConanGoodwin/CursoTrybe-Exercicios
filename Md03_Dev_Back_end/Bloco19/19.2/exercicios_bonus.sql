-- Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT
SELECT Name, Price FROM Pieces, Provides WHERE Provider='RBT' AND Piece=Code;

-- Escreve uma query para exibir todas as informações das cinco peças com os maiores preços
SELECT Pieces.*, Provider, Price FROM Pieces, Provides WHERE Piece=Code ORDER BY Price DESC LIMIT 5;

-- Escreva uma query para exibir o nome das empresas e preço das peças
-- com os quatro maiores preços, começando a lista a partir do 3º item. 
SELECT Name, Price FROM Providers, Provides WHERE Provider=Code ORDER BY Price DESC LIMIT 5 OFFSET 2;

-- Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL.
-- Ordene o resultado pelos preços das peças de forma decrescente.
SELECT Pieces.*, Provider, Price FROM Pieces, Provides WHERE Provider='HAL' AND Piece=Code ORDER BY Price DESC;

-- Escreva uma query para exibir por quantas empresas a peça 1 é provida. 
SELECT COUNT(Pieces.Code) FROM Pieces, Provides WHERE Code=1 AND Piece=Code;