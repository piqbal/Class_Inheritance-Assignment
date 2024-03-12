"use strict";
// class persons{
//     private _age:number|undefined
//     constructor(public name:string,  protected hobbies:string[]){}
Object.defineProperty(exports, "__esModule", { value: true });
// public set age(age:number){
//     if(age<0 || age>100){
//         console.log("Age is not valid.")
//     }
//     this._age=age
// }
// public get this_age(){
//     if(this._age == undefined){
//         console.log("Age is not defined.")
//     }
//     return this._age
// }
//     introduce(){
//         return`I am ${this.name}, my age is ${this.age} and my hobbies is ${this.hobbies}`
//     }
// }
// let person1=new persons("Pervaiz",["Coding", "CardsGame"])
// person1.age=45
// console.log(person1.introduce())
// // console.log(person1.age)
class person {
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    introduce() {
        return `my age is ${this._age}, my hobbies is ${this.hobbies} and name is ${this.name}`;
    }
    set age(age) {
        if (age < 0 || age > 100) {
            console.log("Age is not valid.");
        }
        this._age = age;
    }
    get this_age() {
        if (this._age == undefined) {
            console.log("Age is not defined.");
        }
        return this._age;
    }
}
let person1 = new person("per", ["codig"]);
person1.age = 344;
console.log(person1.introduce());
