let atleta = {
  name: "Maria",
  lastName: "Silva",
  age: 34,
  medals: { golden: 2, silver: 3 },
};

console.log("A atleta " + atleta.name + " " + atleta.lastName + " tem " + atleta.age + " anos de idade");

atleta['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log("A atleta " + atleta.name + " " + atleta.lastName + " foi eleita a melhor do mundo por " + atleta.bestInTheWorld.lenght + " vezes");

console.log( "A atleta possui " + atleta.medals.golden + " medalhas de ouro e " + atleta.medals.silver + " medalhas de prata");