"use strict";
//  class persons{
//     name:string;
//     age:number;
//     hobbies:string[]
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(name:string, age:number, hobbies:string[]){
//         this.name=name
//         this.age=age
//         this.hobbies=hobbies
//     }
//     introduce(){
//         return`I am ${this.name}, i am ${this.age} years old and my hobbies is ${this.hobbies.join(", ")}`
//     }
//  }
//  class student extends persons{
//     grade:string
//     constructor(name:string, age:number, hobbies:string[], grade:string){
//         super(name, age, hobbies)
//         this.grade=grade
//         }
//         introduce(): string {
//             return`I am ${this.name}, i am ${this.age} years old and my hobbies is ${this.hobbies.join(", ")}
//             and grade is ${this.grade}`
//         }
//     }
//  let person1= new persons("Pervaiz", 31, ["Coding", "Reading"])
//  let person2= new persons("Hassan", 3, ["Football", "Cricket"])
//  let person3= new student("Ali", 3, ["Football", "Cricket"],"10" )
//  console.log(person1.introduce())
//  console.log(person2)
//  console.log(person3.introduce())
// class persons{
//     constructor(public name:string, public age:number){}
//     introduce(){
//         return`The name is ${this.name}, the age is ${this.age}.`
//     }
// }
// class student extends persons{
//     constructor(public name:string, public age:number, public hobbies:string[]){
//         super(name, age)
//     }
// introduce(){
//     return`The name is ${this.name}, the age is ${this.age} and hobbies is ${this.hobbies}`
// }
// }
// let person1=new persons("Pervaiz",31)
// let student1=new student("Hassan",3, ["Coding", "Cards"])
// console.log(person1.introduce())
// console.log(student1.introduce())
// ==============================Getter Setter=================
class persons {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    introduce() {
        return `The name is ${this.name}, the age is ${this.email}, and age is ${this._age}.`;
    }
    set age(age) {
        if (age < 0 || age > 100)
            console.log("Age is not valid.");
        this._age = age;
    }
    get age() {
        if (this._age == undefined) {
            throw new Error("Here age is not defined.");
        }
        return this._age;
    }
}
let person1 = new persons("Pervaiz", "piqbal325");
person1.age = 33;
console.log(person1.introduce());
