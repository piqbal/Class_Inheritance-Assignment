

class mathoperation{

    public static add(n1:number, n2:number):number{
        return n1+n2
    }

    public static sub<t,u>(n3:t, n4:u){
        return `${n3} ${n4}`
    }

    public static n=Math.PI
    
}
console.log(mathoperation.add(5,5))
console.log(mathoperation.sub<boolean,number>(true, 44))
console.log(mathoperation.n)













