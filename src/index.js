// import 'preact'
// import 'lodash'

class Hello {
  constructor (x, y) {
    console.log('HELLO WORLD!')
  }
}

import { add } from './modules/moduleA'
add(1, 5)
add(3, 4)

let hello = new Hello()
console.log(hello)

// import(/* webpackChunkName: "moduleA" */'./modules/moduleA.js')
import(/* webpackChunkName: "moduleB" */'./modules/moduleB.js')
import(/* webpackChunkName: "moduleC" */'./modules/moduleC.js')
import(/* webpackChunkName: "moduleD" */'./modules/moduleD.js')
