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
