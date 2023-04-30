/* 
The javascript Array.isArray() method check passes parameter which is array or not .If passes the parameter is 
array it will be return true otherwise it's return false
*/

let arr = [1, 3, 4, 5]
let isArr = Array.isArray(arr)
console.log(isArr) // true

function filterArray(numbers, callback) {

    let filter = []
    numbers.forEach(n => {
        return  callback(n) && filter.push(n) 
    });
    
    return filter
}
let filter = (number) => number % 2 === 0
let a = filterArray([2, 4, 5, 7,9], filter)

console.log(a)