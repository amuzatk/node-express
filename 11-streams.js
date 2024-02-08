// 4-type of streams in Node.js
//1. Readable : streams from which data can be read (for example, fs.createReadStream() )
//2. Writable : writing data to a destination, such as a file or network connection (for example, fs.createWriteStream())
//3. Duplex : streams that are both Readable and Writable (for example, net.Socket )
//4. Duplex streams that can modify or transform the data as it is written and read (for example, zlib.createDeflate() )


const {createReadStream } = require('fs')

const stream = createReadStream(
    './content/big.txt',
    'utf8',
    {highWaterMark: 90000 }
    )

    // default 64k
    // last buffer - remainder
    // Buffering - means reading data from a file stream by node.js in smaller chunks called buffer
// Buffer - temporary storage space in memory where data is held before processed or written elsewhere
// highWaterMark - the maximum size (in bytes) for each buffer. controls the size of the buffer
stream.on('data', (result)=>{
    console.log(result)
})

stream.on('error', (error)=>
console.log(error))
 