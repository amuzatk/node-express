// Module - Encapsulated code (only share what is needed)
// CommonJS, every file is a module (by default)

const {John, Mike} = require('./3a-names');
// const names = require('./3-names');
const sayHi = require('./2-utils');
const data = require('./3b-alternative-flavor');
require('./3c-mind-grenade')

console.log(data)
sayHi('Kazeem')
sayHi(John)
sayHi(Mike)