import './css/base.less'

import { a } from './common/util'
// import { renderA } from './components/a'
import { componentA } from './components/a'
a()

var app = document.getElementById('app')
// var div = document.createElement('div')
// div.className = 'box3'
// app.appendChild(div)

var list = componentA()
app.appendChild(list)

$('div').addClass('new')

// renderA()
$.get('/comments/show', {
    id: '4193586758833502',
    page: 1
}, function (data) {
    console.log(data)
})

// $.get('/aj/video/playstatistics', {
//     ajwvr: '6'
// }, function (data) {
//     console.log(data)
// })

$.get('/msg/index', {
    format: 'cards'
}, function (data) {
    console.log(data, 1)
})

if (module.hot) {
    // module.hot.accept()
    module.hot.accept('./components/a', function () {
        app.removeChild(list)

        let ComponentA = require('./components/a').componentA
        let newlist = ComponentA()

        app.appendChild(newlist)
        list = newlist
    })
}
