/* 动态import */
// import * as _ from 'lodash'
// var page = 'subPageB'

// if (page === 'subPageA') {
//     import(/* webpackChunkName:'subpageA' */'./subPageA')
//         .then(function(subPageA) {
//             console.log(subPageA)
//         })
// } else if (page === 'subPageB') {
//     import(/* webpackChunkName:'subpageB' */'./subPageB')
//         .then(function(subPageB) {
//             console.log(subPageB)
//         })
// }

// export default 'pageA'

// import * as _ from 'lodash'
var page = 'subpageA'
import subPageA from './subPageA'
import subPageB from './subPageB'

console.log(subPageA)
console.log(subPageB)


export default 'pageA'