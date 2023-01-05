interface ICar {
  brand: string;
  color: string;
  doors: number;
  honk(): void;
  turnOn(): void;
  turnOff(): void;
  speedUp(): void;
  speedDown(): void;
  stop(): void;
  turn(d: string): void;
}

class Car implements ICar {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('BI BI FOM FOM');
  }

  turnOn(): void {
    console.log('Carro ligado');
  }

  turnOff(): void {
    console.log('Carro deligado');
  }

  speedUp(): void {
    console.log('Velocidade aumentada');
  }

  speedDown(): void {
    console.log('Velocidade diminuida')
  }

  stop(): void {
    console.log('Carro parado')
  }

  turn(direction: string): void {
    console.log(`Virou a ${direction}`);
  }
}

type Slice = 4 | 6 | 8;
type typeComum = 'Calabresa' | 'Frango' | 'Pepperoni';
type typeVegetarian = "Marguerita" | "Palmito" | "Cogumelos";
type typeSugar = "Nutela" | "Goiabada com Queijo" | "Marshmallow";

interface IPizza {
  flavor: string;
  slices: Slice;
}

interface IPizzaComum extends IPizza {
  flavor: typeComum;
}

interface IPizzaVegetarian extends IPizza {
  flavor: typeVegetarian;
}

interface IPizzaSugar extends IPizza {
  flavor: typeSugar;
}

const pizza01: IPizza = {
  flavor: 'Calabresa',
  slices: 8
}

const pizza02: IPizza = {
  flavor: 'Marguerita',
  slices: 6
}

const pizza03: IPizza = {
  flavor: 'Nutela',
  slices: 4
}

const gol = new Car('Volkswagen','prata',4);
gol.turnOn();
gol.speedUp();
gol.speedUp();
gol.speedDown();
gol.turn('esquerda');
gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedUp();
gol.speedUp();
gol.speedUp();
gol.speedUp();
gol.speedDown();
gol.speedDown();
gol.turn('direita');
gol.speedUp();
gol.speedUp();
gol.speedDown();
gol.speedDown();
gol.stop();
gol.speedUp();
gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedUp();
gol.speedUp();
gol.speedUp();
gol.speedUp();
gol.speedDown();
gol.speedDown();
gol.turn('esquerda');
gol.speedUp();
gol.speedDown();
gol.speedDown();
gol.turn('direita');
gol.speedDown();
gol.speedDown();
gol.stop();
gol.turnOff();

type callBackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: T[], callback: callBackFilter<T>): Array<T> {
  const newArray: Array<T> = [];

  array.forEach((item, index) => {
    if (callback(item,index,array)) newArray.push(item);
  });

  return newArray;
}

console.log(myFilter([1, 2, 3], (item) => item < 3 ));


console.log(myFilter(["a", "b", "c"], (item) => {

  return item !== "a"

}));