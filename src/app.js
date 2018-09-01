import './css/base.less'

import { a } from "./common/util";
a()

var app = document.getElementById('app')
var div = document.createElement('div')
div.className = 'box'
app.appendChild(div)

$('div').addClass('new')

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