const methodName = "m"
const symb  = Symbol()


let weirdMethod = {
    "Method with space " (x) {
        return x+ 1 ;
    } ,
    [methodName] (x) {return x + 2} ,
    [symb] (x) {return x + 3}
}
weirdMethod["Method with space "](1) //2
weirdMethod[methodName](1) //3
weirdMethod[symb](1) //4

