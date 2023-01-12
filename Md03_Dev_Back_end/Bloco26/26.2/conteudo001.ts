class Animal {
  constructor(public name: string, private _birthDate: Date) {}

  get age() {
    const timeDiff = Math.abs(
      Date.now() - 
      new Date(this._birthDate).getTime()
    );

    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}

class Mammal extends Animal {
  walk() {
    console.log(`${this.name} está andando`);
  }
}

class Bird extends Animal {
  fly() {
    console.log(`${this.name} está voando!`)
  }
}

const tigger = new Mammal('tigre', new Date(Date.parse('May 03, 2020')));
const parrot = new Bird('Papagaio', new Date(Date.parse('Jun 07, 2017')));

const main = (animal: Animal) => {
  console.log(animal.age);
}

main(tigger);
tigger.walk();
console.log(parrot.age);
parrot.fly();