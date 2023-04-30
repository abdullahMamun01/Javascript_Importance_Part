const fs = require('fs');


function wordsCount(filePath) {
    return new Promise((resolve, reject) => {
        let path = filePath
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('File not found'))
            }
            else {
                let text = data.split(' ')
                resolve(text.length)
            }
        })



    })
}


let path = './Asyncronous_JS/file.txt'

wordsCount(path)
    .then(res => {
        console.log(res)
    }).catch(e => {
        console.log(e.message)
    })

