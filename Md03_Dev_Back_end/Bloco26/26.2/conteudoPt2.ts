interface Animal {
  name: string;
  age: number;

  getBirthDate(): Date;
}

class Birds implements Animal {
  constructor(public name: string, private birthDate: Date) {}

  get age() {
    var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());

    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  getBirthDate(): Date {
    return this.birthDate;
  }

  fly() {
    console.log(`${this.name} está voando!`);
  }
}

const parrot02 = new Birds('Papagaio',new Date(Date.parse('Aug 16, 2015')));

console.log(parrot02.age);
parrot02.fly();