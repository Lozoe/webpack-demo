import base from './css/base.css'
import common from './css/common.css'

// var flag = false
// setInterval(function(){
//     if (flag) {
//         common.unuse()
//     } else {
//         common.use()
//     }
//     flag = !flag
// }, 1000)

let $app = document.getElementById('app')
$app.innerHTML = `<div class="${base.box}"></div>`