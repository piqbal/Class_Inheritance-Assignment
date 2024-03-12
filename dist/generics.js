"use strict";
// function add1<T>(a:T):T{
//     return a
// }
Object.defineProperty(exports, "__esModule", { value: true });
// let result1:number=add<number>(45)
// let result2:string=add<string>("Pervaiz")
// console.log(result1)
// console.log(result2)
//======================
// function add(a:string, b:string):string
// function add(a:number, b:number):number
// function add(a:any, b:any):any{
//     return a+b
// }
function add(a, b, c) {
    console.log(typeof a);
    console.log(typeof b);
}
let result1 = add(false, 45, true);
let result2 = add(true, 33, true);
