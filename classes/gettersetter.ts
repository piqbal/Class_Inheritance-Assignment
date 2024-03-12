

class person {
    private _age:number | undefined
    constructor(public  name:string, public hobbies:string[]){}

    introduce(){
        return`my age is ${this._age}, my hobbies is ${this.hobbies} and name is ${this.name}`
    }
    public set age(age:number){
        if(age < 0 || age > 100){
            console.log("Age is not valid.")}
        this._age=age}
        
        public get this_age(){
            if(this._age == undefined){
                console.log("Age is not defined.")
            }
            return this._age
        }
        
        
}

let person1= new person("per",["codig"])
person1.age=344
console.log(person1.introduce())
















