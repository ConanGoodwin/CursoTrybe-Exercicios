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

class Superclass {
  constructor(public isSuper: boolean = true) {}

  protected sayHello() {
    console.log('Olá Mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super(false);
  }

  sayHello2() {
    this.sayHello();
  }
}

function myFunction(objClass: Subclass) {
  objClass.sayHello2();
}

function mySuperFunction(objClass: Superclass) {
  (objClass.isSuper) ? console.log('super') : console.log('sub');
}

const objSubClass = new Subclass();
const objSupreClass = new Superclass();

myFunction(objSubClass);
// myFunction(objSupreClass);
mySuperFunction(objSubClass);
mySuperFunction(objSupreClass);