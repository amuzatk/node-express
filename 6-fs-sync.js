const {readFileSync, writeFileSync } = require('fs')
// const fs = require('fs')

// utf8 converts the content into human-readable format, else we get BUFFER
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

// flag property prevents existing file content to be overwritten
writeFileSync('./content/result-syncFile.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'})