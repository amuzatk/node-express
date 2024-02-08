const fs = require('fs')
const http = require('http')

const server = http.createServer(function (req,res){
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', ()=>{
        fileStream.pipe(res)
        // pipe is used to transfer data from a readable stream to writable stream in chunck without overwhelmin the memory
    })

    fileStream.on('error', ()=>{
        res.end(error)
    })
})

server.listen(5000, ()=>{
    console.log(`Server listening on port ${5000}...!`)
})