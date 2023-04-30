/* 
The pure function do not modify or should not have side effect any external state or value

*/
//Example 1 
function reverseArray(arr){
    return [...arr].reverse()
}
const originalArray = ['apple', 'banana', 'cherry'];
const reversedArray = reverseArray(originalArray);

console.log(originalArray); // Output: ['apple', 'banana', 'cherry']
console.log(reversedArray); // Output: ['cherry', 'banana', 'apple']


//Example 2
function filterPositiveNumbers(numbers){
    return numbers.reduce((acc,curr) =>{
        if(curr > 0){
            acc.push(curr)
        }

        return acc
    } , [])
}
const numbers = [1, -2, 3, -4, 5];
const positiveNumbers = filterPositiveNumbers(numbers);

console.log(numbers); // Output: [1, -2, 3, -4, 5]
console.log(positiveNumbers); // Output: [1, 3, 5]




