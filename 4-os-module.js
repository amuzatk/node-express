const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// methos returns system uptime in seconds
console.log(`The System uptime is ${os.uptime()} in seconds`)

const currentOS = {
    name: os.type(),
    freeMem: os.freemem(),
    totalmem: os.totalmem(),
    release: os.release()
}

console.log(currentOS)