"use strict";
// class student{
//     name:string
//     gender:string
//     rollNumber:number
Object.defineProperty(exports, "__esModule", { value: true });
//    constructor(n:string, g:string, r:number){
//     this.name=n
//     this.gender=g
//     this.rollNumber=r
//    }
//    studentfunc(){
//     return`Student name is ${this.name} and his gender is ${this.gender}`
//    }
// }
// let student1=new student("Pervaiz", "Male", 31)
// let student2=new student("Hassan", "Male", 3)
// let student3=new student("Ali", "Male", 3)
// let student4=new student("Huzaifa", "Male", 2)
// let studentData:student[]=[]
// studentData.push(student1)
// studentData.push(student2)
// studentData.push(student3)
// console.log(student1.studentfunc())
// console.log(student2.studentfunc())
// console.log(student3.studentfunc())
// console.log(student4.studentfunc())
class persons {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    add() {
        return `The name of first person is ${this.name} and age is ${this.age}`;
    }
}
let result1 = new persons("Pervaiz", 31);
console.log(result1.add());
