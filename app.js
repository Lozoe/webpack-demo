// ESModule
import sum from './src/sum'

// CommonJS
let minus = require('./src/minus')

// AMD
require(['./src/multi'], (multi) => {
    console.log(`multi 12 * 10 = ${multi(12, 10)}`)
})

console.log(`sum 12 + 10 = ${sum(12, 10)}`)
console.log(`minus 12 - 10 = ${minus(12, 10)}`)