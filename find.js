/* 
The javascript find method is similar to the filter method only difference is filter method return a matching an array of element on the
other hand find() method returns only one element depending on the pass of the condition.The callback function is executed for each element in the array until it finds an element that satisfies the given condition
 It also doesn't modify the main array.
*/

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const person = people.find(person => person.name === 'Bob');

console.log(person); // Output: { name: 'Bob', age: 30 }


const data = [{ id: 1, name: 'Alice', colors: ['red', 'green'] },
{ id: 2, name: 'Bob', colors: ['blue'] },
{ id: 3, name: 'Charlie', colors: ['green', 'yellow'] }
];
const w =data.flatMap(({id}) => Object.keys(id))

console.log(w)