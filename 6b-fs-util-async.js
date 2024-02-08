// read from, write to files using async util and fs modlues

const {readFile, writeFile } = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try {
    const first = await readFilePromise('./content/first.txt', 'utf8')
    const second = await readFilePromise('./content/second.txt', 'utf8')
    writeFilePromise('./content/result-asyncFile.txt',
    `New content is : ${first}, ${second} `,
    // {flag:"a" } // flag is used to prevent existing file content to be overwritten
    )
    console.log(first, second)
    } catch (error) {
        console.log(error)
    } 
}

start()

// const {readFile, writeFile } = require('fs')
// const util = require('util')

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async() => {
//     try {
//     const first = await readFilePromise('./content/first.txt', 'utf8')
//     const second = await readFilePromise('./content/second.txt', 'utf8')
//         console.log(first,second)
//     } catch (error) {
//         console.log(error)
//     }
// }

// start()





// const {readFile } = require('fs')

// const getText = (path) => {
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (error, data)=> {
//             if(error){
//                 reject(error)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// const start = async() => {
//     try {
//     const first = await getText('./content/second.txt')
//     const second = await getText('./content/second.txt')
//         console.log(first,second)
//     } catch (error) {
//         console.log(error)
//     }
// }

// start()

