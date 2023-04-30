/* 
The "map() " method in JavaScript creates a new array by calling a provided function on every element in the original array. 
The provided function is referred to as a callback function and takes three arguments: current element,index,arr
first argument is rquired .
The map() method does not modify the original array. Instead, it returns a new array with the results of calling the provided function on each element in the original array
*/

let number = [10, 20, 30, 44, 70]
let new_number = number.map(n => n * n)
console.log(number) // Output  : [10,20,30,44,70]
console.log(new_number) // Output [ 100, 400, 900, 1936, 4900 ]


