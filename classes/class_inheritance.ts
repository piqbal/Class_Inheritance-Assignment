class persons{
    constructor(public name:string, public age:number, protected hobbies:string[]){}
    introduce(){
        return`I am ${this.name}, my age is ${this.age} and my hobbies is ${this.hobbies}`
    }
}


class student extends persons{
    
    constructor(name:string, age:number, hobbies:string[],public grade:number){
        super(name, age, hobbies)
    }
   introduce(){
    return`My name is ${this.name}, my age is ${this.age}, my hobbies is ${this.hobbies} and my grade is 
    ${this.grade}`
}
   }

   let person1=new persons("Pervaiz", 31, ["Coding", "CardsGame"])
   let person2=new student("Hassan", 3, ["watch cartoon"], 1)

console.log(person1.introduce())
console.log(person2.introduce())












