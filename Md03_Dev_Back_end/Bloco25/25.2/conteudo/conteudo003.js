var employee = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
var teacher = {
    firstName: "Célia",
    lastName: 'Lee',
    subject: 'English',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    sayHello: function () {
        return "Ol\u00E1 eu sou ".concat(this.fullName, ", e leciono ").concat(this.subject);
    }
};
// employee.firstName = 10;  // Error: Type "number" is not assignable to type "string"
console.log(teacher.sayHello());
