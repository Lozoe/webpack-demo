webpackJsonp([4,2],{

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ('moduleA');

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* require.ensure */
undefined/*! require.include ./moduleA */
var page = 'subPageA'

if(page === 'subPageA') {
    __webpack_require__.e/* require.ensure */(1/* duplicate */).then((function() {
        var subPageA = __webpack_require__(1)
        console.log(subPageA)
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe)
} else if(page === 'subPageB') {
    __webpack_require__.e/* require.ensure */(0/* duplicate */).then((function() {
        var subPageB = __webpack_require__(2)
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe)
}

new Promise(function(resolve) { resolve(); }).then((function() {
    var _ = __webpack_require__(0)
    console.log(_.join([1, 2],'*'))
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe)

/* harmony default export */ __webpack_exports__["default"] = ('pageB');

/***/ })

},[7]);