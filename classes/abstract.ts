

abstract class shape{
    constructor(public color:string){}
    
abstract calculateArea():number
abstract displayArea:()=>void
}

class student extends shape{
    constructor(public color:string, public radius:number){
        super(color)
    }
calculateArea(): number {
    return this.radius+this.radius
}
    
displayArea: () => string=():string=>{
    return`The color is ${this.color} and radius is ${this.calculateArea()}`
}

introduce(){
    return`the color is ${this.color}`
}
}

let result1=new student("red",5)
console.log(result1.introduce())

















