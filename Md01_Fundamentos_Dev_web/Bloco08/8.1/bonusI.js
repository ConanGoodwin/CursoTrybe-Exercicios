const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const calculaValorAleatorio = (maximo, minimo) =>
  Math.floor(Math.random() * maximo + minimo);

const calculaAtaque = (personagem) => {
  let danoMaximo = 0;
  let danoMinimo = 0;

  switch (personagem) {
    case "dragon":
      danoMaximo = dragon.strength - 15;
      danoMinimo = 16;
      return calculaValorAleatorio(danoMaximo, danoMinimo);
    case "warrior":
      danoMaximo = warrior.strength * warrior.weaponDmg - warrior.strength;
      danoMinimo = warrior.strength;
      return calculaValorAleatorio(danoMaximo, danoMinimo);
    case "mage":
      if (mage.mana < 15) {
        return "Não possui mana suficiente";
      } else {
        danoMaximo = mage.intelligence * 2 - mage.intelligence;
        danoMinimo = mage.intelligence;
        mage.mana = mage.mana - 15;
        return {
          dano: calculaValorAleatorio(danoMaximo, danoMinimo),
          mana: mage.mana,
        };
      }
  }
};

console.log(`Dano do Dragão: ${calculaAtaque("dragon")}`);
console.log(`Dano do Guerreiro: ${calculaAtaque("warrior")}`);
console.log(`Dano do Mago: ${mage.mana < 15 ? calculaAtaque("mage") : Object.entries(calculaAtaque("mage"))}`);