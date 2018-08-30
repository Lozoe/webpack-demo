
require.include('./moduleA')
var page = 'subpageA'
if(page === 'subPageA') {
    require.ensure(['./subPageA'], function() {
        var subPageA = require('./subPageA')
    }, 'subPageA')
} else if(page === 'subPageB') {
    require.ensure(['./subPageB'], function() {
        var subPageB = require('./subPageB')
    }, 'subPageB')
}

require.ensure(['lodash'], function() {
    var _ = require('lodash')
    console.log(_.join([1, 2],'*'))
}, 'vendor')

export default 'pageA'

// import './subPageA'
// import './subPageB'

// require.ensure(['lodash'], function() {
//     var _ = require('lodash')
//     _.join([1, 2], 3)
// }, 'vendor')

// export default 'pageA'

// import * as _ from 'lodash'
// var page = 'subpageA'

// if (page === 'subpageA') {
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