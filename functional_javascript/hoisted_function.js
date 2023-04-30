 /* 
 funtion declaration are hoisted so we really can do this set 0
 */
uniqueInteger.counter = 0 ;


function uniqueInteger(){
    return uniqueInteger.counter++
}


console.log(uniqueInteger())
console.log(uniqueInteger())


