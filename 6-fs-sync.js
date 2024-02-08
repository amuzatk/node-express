const {readFileSync, writeFileSync } = require('fs')
// const fs = require('fs')

// utf8 converts the content into human-readable format, else we get BUFFER
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

// flag property prevents existing file content to be overwritten
writeFileSync('./content/result-syncFile.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'})



// const {writeFileSync } = require('fs')
// for( let i=0; i<100; i++){
//     writeFileSync('./content/big.txt', `This is a large text ${i} \n`, {flag:"a" })
// }


// const http = require('http')
// const server = http
// .createServer((req,res)=>{
//     if(req.url === '/'){
//     res.end('Home Page')
// } else if(req.url === '/about'){
//     // Blocking Code
//     for(let i=1; i<100; i++){
//         for(let j=1; j<100; j++){
//             console.log(`${i} ${j}`)
//         }
//     }

//     res.end('ABOUT Page')
// }
// })

// server.listen(5000, ()=>{
//     console.log(`Server listens on port : 5000...`)
// })