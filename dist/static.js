"use strict";
// class mathoperation{
Object.defineProperty(exports, "__esModule", { value: true });
//     public static PI:number=Math.PI
//     public static add(num1:number, num2:number):number{
//         return num1+num2;}
//     public static sub(num3:number, num4:number):number{
//         return num4-num3
//     }
// }
// console.log(mathoperation.add(3,4))
// console.log(mathoperation.PI)
// console.log(mathoperation.sub)
//========================static==========
class mathoperation {
    static add(n1, n2) {
        return n1 + n2;
    }
    static sub(n3, n4) {
        return `${n3} ${n4}`;
    }
}
mathoperation.n = Math.PI;
console.log(mathoperation.add(4, 5));
console.log(mathoperation.sub(true, 44));
console.log(mathoperation.n);
