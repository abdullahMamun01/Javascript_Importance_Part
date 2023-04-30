
const str = "The quick brown fox jumps over the lazy dog";
const pattern = /the/gi;
const matches = str.match(pattern);
console.log(matches); // Output: ["The", "the"]
