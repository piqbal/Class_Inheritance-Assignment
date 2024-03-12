

function add<t,u>(a:t, b:u, c:boolean):void{
    console.log(typeof a)
    console.log(typeof b)
}
let result1:void=add<boolean, number>(false, 45, true)
let result2=add<boolean, number>(true, 33, true)




