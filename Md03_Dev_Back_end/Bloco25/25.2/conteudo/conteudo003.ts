interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

interface Teacher extends Employee {
  subject: string;
  sayHello(): string;
}

let employee: Employee = {
  firstName: 'John',
  lastName: 'Doe',
  fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

let teacher: Teacher = {
  firstName: "Célia",
  lastName: 'Lee',
  subject: 'English',

  fullName(): string {
    return this.firstName + " " + this.lastName;
  },

  sayHello(): string {
    return `Olá eu sou ${this.fullName}, e leciono ${this.subject}`;
  },
}

// employee.firstName = 10;  // Error: Type "number" is not assignable to type "string"
console.log(teacher.sayHello());

