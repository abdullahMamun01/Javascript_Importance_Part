let obj1 = {
    name : 'shakib' ,
    age : 23 
}

let obj2 = {
    address : "abc raod 2/3 , bangladesh" ,
    asset : "$1m usd"
}


let destructure = {...obj1 , ...obj2} 

//object overrides value with destructur
//example 1
let o = {x: 1} ;
let overrides = {x:3 , ...o} // x : 1

//example 2
let o2 = {x: 1} ;
let overrides2 = {...o, x:4 }  // x: 4


let newObj = {...overrides,...overrides2} // x : 4
let o3 = Object.create({x:1})
let p2 =  {...o3} // {}
