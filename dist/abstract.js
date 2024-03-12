"use strict";
// abstract class shape{
//     constructor(protected color:string){}
Object.defineProperty(exports, "__esModule", { value: true });
// abstract calculateArea():number;
// abstract displayArea:()=>void
// }
// class circle extends shape{
//     constructor(public color:string, public radius:number){
//         super(color)
//     }
// public  calculateArea():number{
//     return Math.PI*this.radius*this.radius
// }
// public  displayArea: () => void=():void=>{
//     console.log(`The color of circle is ${this.color} and radius is ${this.calculateArea()}`)
// }
// }
// let result=new circle("red", 5)
// console.log(result.displayArea())
// abstract class person{
//     constructor(public color:string){}
// abstract calculatearea():number
// abstract displayarea():void
// }
// class student extends person{
//     constructor(public color:string, public n1:number, public n2:number){
//         super(color)
//     }
// public calculatearea(): number {
//     return this.n1+this.n2}
// public displayarea:()=>void=():void=>{
//     console.log( `The color is ${this.color} and sum is ${this.calculatearea()}`)
// }
// }
// let result1=new student("Green", 4,5)
// console.log(result1.displayarea())
// ============================Example 2============
class shape {
    constructor(color) {
        this.color = color;
    }
}
class student extends shape {
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
        this.displayArea = () => {
            return `The color is ${this.color} and radius is ${this.calculateArea()}`;
        };
    }
    calculateArea() {
        return this.radius + this.radius;
    }
    introduce() {
        return `the color is ${this.color}`;
    }
}
let result1 = new student("green", 5);
console.log(result1.introduce());
