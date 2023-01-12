interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(num: number) {
    return `${num + this.myNumber}`;
  } 
}

const numero = new MyClass(3);

console.log(numero.myFunc(2));