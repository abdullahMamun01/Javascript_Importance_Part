const fs = require('fs');

async function wordsCount(filePath) {
  let path = filePath;
  try {
    let data = await fs.promises.readFile(path, 'utf8');
    let result = await data.split(' ').length
    console.log(result)
  } catch (error) {
    throw new Error('File not found');
  }
}

let path = './Asyncronous_JS/file.txt';

wordsCount(path)

console.log('i am the last')