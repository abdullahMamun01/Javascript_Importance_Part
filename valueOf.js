/* 
valueOf method is called when js need to convert an object to some primitive data type. It is like the toString()
method . Javascript call this method automatically try to convert to any primitive data type

*/

let number = {
    x: 10 ,
    y:30 ,
    valueOf : function (){
        return this.x * this.y
    }
}


console.log(Number(number)) // 300


let number2 = {
    x : "x" ,
    y: "y",
    valueOf : function (){
        return this.x * this.y
    }
}


console.log(Number(number2)) // NaN 