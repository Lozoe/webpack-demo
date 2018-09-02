
/* require.ensure */
// require.include('./moduleA')
// var page = 'subPageA'

// if(page === 'subPageA') {
//     require.ensure(['./subPageA'], function() {
//         var subPageA = require('./subPageA')
//         console.log(subPageA)
//     }, 'subPageA')
// } else if(page === 'subPageB') {
//     require.ensure(['./subPageB'], function() {
//         var subPageB = require('./subPageB')
//     }, 'subPageB')
// }

// require.ensure(['lodash'], function() {
//     var _ = require('lodash')
//     console.log(_.join([1, 2],'*'))
// }, 'vendor')

// export default 'pageB'


// import * as _ from 'lodash'
var page = 'subpageB'

import subPageA from './subPageA'
import subPageB from './subPageB'

console.log(subPageA)
console.log(subPageB)


export default 'pageB'