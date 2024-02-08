const {readFile, writeFile } = require('fs')

console.log('Start') //1. testing async programming
readFile('./content/first.txt', 'utf8', (error, result)=> {
    if(error){
        console.log(error)
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (error, result)=> {//executed inside the callback of first readFile methd
        if(error){
            console.log(error)
            return;
        }
        const second = result;

        // executed inside the callback of second readFile methd
        writeFile('./content/result-asyncFile.txt', 
        `This is result : ${first}, ${second}`,
        (error, result)=> {
            if(error){
                console.log(error)
                return;
            }
            console.log('Done with this task') //3. Testing async
        }
        )
    })
})
console.log('Start next task')//2. Testing async



// // started operating system process
// console.log('First')

// setTimeout(()=> {
// console.log('Second')
// }, 1000)

// console.log('Third')
// // completed and exited operating system process


// setInterval(()=>{
// console.log('Hello World')
// }, 2000)

// console.log('I will run first')
// // process stays alive unless
// // kill process Contro + C
// // unexpected error
