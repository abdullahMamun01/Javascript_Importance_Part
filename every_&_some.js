
/* 
The JavaScript every() method iterates over every element of an array and applies a callback function to each element.
It then checks if the callback function returns a truthy value for every element. 
If the callback function returns a truthy value for every element, 
then the every() method will return true. Otherwise, if the callback function returns a falsy value for any element, 
the every() method will return false.

*/
let number = [1,2,3,4,5,10,6]
let less_then_ten = number.every(n => n <= 10)
console.log(less_then_ten) // true

let number2 = [2,4,6,7,8,10,12]

let odds = number2.every(n => n % 2)
console.log(odds) // false



let ages = [10,15,18,20,22,30,35]

let mature = ages.some(age => age >=18)
let nan = ages.some(isNaN)
console.log(nan)