var Person = /** @class */ (function () {
    function Person(name, birthDate, age) {
        this.name = name;
        this.birthDate = birthDate;
        this.age = age;
    }
    Person.prototype.speak = function () {
        console.log("".concat(this.name, " est\u00E1 falando."));
    };
    Person.prototype.eat = function () {
        console.log("".concat(this.name, " est\u00E1 comendo."));
    };
    Person.prototype.walk = function () {
        console.log("".concat(this.name, " est\u00E1 andando."));
    };
    return Person;
}());
var person1 = new Person("Jane Doe", new Date("1986-01-01"), 27);
var person2 = new Person("Jon Doe", new Date("1980-08-05"), 42);
console.log(person1);
person1.speak();
console.log(person2);
person2.walk();
var Dog = /** @class */ (function () {
    function Dog(name, race, age) {
        this.name = name;
        this.age = age;
        this.race = race;
    }
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " bark!"));
    };
    return Dog;
}());
var dog1 = new Dog('lulu', 'poodle', 3);
var dog2 = new Dog('rex', 'pitbull');
dog1.bark();
dog2.bark();
