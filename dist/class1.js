"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class persons {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `I am ${this.name}, my age is ${this.age} and my hobbies is ${this.hobbies}`;
    }
}
class student extends persons {
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return `My name is ${this.name}, my age is ${this.age}, my hobbies is ${this.hobbies} and my grade is 
    ${this.grade}`;
    }
}
let person1 = new persons("Pervaiz", 31, ["Coding", "CardsGame"]);
let person2 = new student("Hassan", 3, ["watch cartoons"], 1);
console.log(person1.introduce());
console.log(person2.introduce());
// same name with same parameters are overloading.
// same name with same parameter are overriding.
