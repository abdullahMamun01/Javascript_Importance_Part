/* 
The Javascript filter method returns the new array of elements depending on the pass of the condition.
This filter method doesn't modify the main array 

*/


let ages = [15,16 ,18,20 ,33,27,25]
let mature = ages.filter(age => age >= 18)

console.log(mature) // [ 18, 20, 33, 27, 25 ]