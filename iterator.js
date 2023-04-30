
/* 
In JavaScript, an iterator is an object that provides a sequence of values. 
It has a method called next() that returns an object with two properties: value, 
which is the next value in the sequence, and done, 
which is a boolean that indicates whether the iterator has reached the end of the sequence.

*/


function createIterator(collection) {
    let i = 0
    return {
        next() {
            return {
                done: i >= collection.length,
                value: collection[i++] 
            }

        }
    }
}


let iterator  = createIterator([1,2,3,4,5])

iterator.next()
iterator.next()
iterator.next()
iterator.next()
console.log(iterator.next())



let arr = [1,2,3,4,5,6,1,2,3]

let uni = new Map(arr.map((e,i) => [i , e]))
// let uni = new Map([['0' , 1] , ['0' , 2]])

console.log(uni)