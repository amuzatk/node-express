// npm - global command, comes with node
// npm --version or npm -v or npm --v

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (for mac)

// package.json - manifest file (stores important info about project/packages)
//1. manual approach - (create package.json in the root, create properties etc)
//2. npm init (step by step, press enter to skip)
//3. npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2, [4, 3, [5,7]]]];

const flattenedItem = _.flattenDeep(items)
console.log(flattenedItem)