// const EventEmitter = require('events')

// const customEvent = new EventEmitter()

// customEvent.on('response', ()=>{
//     console.log('Listening to events')
// })

// customEvent.emit('response')

const EventEmitter = require('events')

const customEvent = new EventEmitter()

customEvent.on('response', (name, id)=>{
    console.log(`${name} with ${id} is listening for events`)
})

customEvent.on('response', ()=>{
    console.log('Another events being listened for')
})

customEvent.emit('response', 'Kazeem', 1)