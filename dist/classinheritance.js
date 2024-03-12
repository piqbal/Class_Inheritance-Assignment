"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class persons {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
let person1 = new persons("Pervaiz", 31, ["Coding", "Reading"]);
let person2 = new persons("Hassan", 3, ["Football", "Cricket"]);
let person3 = new persons("Ali", 3, ["Football", "Cricket"]);
console.log(person1);
console.log(person2);
console.log(person3);
