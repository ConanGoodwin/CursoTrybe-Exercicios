-- Mostre todos os detalhes dos filmes que contêm a palavra ace no nome. 
SELECT * FROM film WHERE title LIKE '%ACE%';

-- Mostre todos os detalhes dos filmes cujas descrições finalizam com china
SELECT * FROM film WHERE description LIKE '%CHINA';

-- Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord. 
SELECT * FROM film WHERE description LIKE '%GIRL%' AND title LIKE '%LORD';

-- Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon
SELECT * FROM film WHERE title LIKE '___GON%';

-- Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary.
SELECT * FROM film WHERE title LIKE '___GON%' AND description LIKE '%DOCUMENTARY%';

-- Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito.
SELECT * FROM film WHERE title LIKE '%ACADEMY' OR title LIKE 'MOSQUITO%';

-- Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições. 
SELECT * FROM film WHERE description LIKE '%MONKEY%' AND description LIKE '%SUMO%'