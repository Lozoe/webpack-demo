import axios from 'axios'
import qs from 'qs'
import * as constants from '@/config/constants'

const http = Symbol('http')
const getData = Symbol('getData')
const needJsonData = Symbol('needJsonData')
const setConfig = Symbol('setConfig')
const successCallback = Symbol('successCallback')
const errorCallback = Symbol('errorCallback')
function empty () {}

function* entries (obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]]
  }
}

export class Proxy {
  _config = {};

  defaultData = { ...constants.DEFAUT_REQ_DATA };

  static create (config) {
    return new this(config)
  }

  constructor (config) {
    if (!config) return
    for (let value of Object.keys(config).values()) {
      this._config[value] = this[setConfig](value)
      this[value] = (name => {
        return (data, callback, errorCallback, scope) => {
          if (!this._config[name]) return
          let {
            useDefaultData,
            url,
            method = 'post',
            headers = { 'Content-Type': 'application/json' },
            timeout = 3000
          } = this._config[name]
          if (useDefaultData) {
            data = this[getData]({ ...this.defaultData, ...data }, headers)
          }

          let options = {
            url,
            method,
            headers,
            data,
            timeout
          }
          this[http](options, callback, errorCallback, scope)
        }
      })(value)

      console.log(this[config])
      console.log(this)
    }
  }

  [http] (
    options = {},
    callback = empty,
    errorCallback = empty,
    scope
  ) {
    axios(options)
      .then((response = {}) => {
        let res = response.data
        this[successCallback](res, callback, scope)
      })
      .catch((error = {}) => {
        this[successCallback](error, errorCallback, callback, scope)
      })
  }

  [getData] (data, headers) {
    if (data && data.constructor && data.constructor === window.FormData) {
      return data
    }
    return this[needJsonData](headers)
      ? JSON.stringify(data)
      : qs.stringify(data)
  }

  [needJsonData] (headers) {
    for (var key in headers) {
      if (
        key.toLowerCase() === 'content-type' &&
        headers[key] === 'application/x-www-form-urlencoded'
      ) {
        return false
      }
    }
    return true
  }

  [setConfig] (config) {
    if (typeof config === 'string') {
      // 默认情况下string直接为请求url，请求方式为post
      config = { url: config, method: 'post' }
    }
    return config
  }

  [successCallback] (res, callback, scope) {
    if (!res) {
      res = { ret: false, errMsg: '请求失败，请重试' }
    }

    // 可以做统一的处理
    callback.call(scope, res)
  }

  [errorCallback] (error, errorCallback, callback, scope) {
    error.ret = false
    error.errCode = error.code
    error.errMsg = '请求超时，请重试' // 屏蔽直接抛出的异常
    callback.call(scope, error)
    errorCallback.call(scope, error)
  }

  HttpPolyfill (options = {}, success = empty, fail = empty) {
    let XHR = window.XMLHttpRequest && new XMLHttpRequest()
    if (!XHR) {
      alert('不支持XHR')
      return
    }
    let {
      headers = {},
      method = 'POST',
      url,
      data,
      timeout = 30 * 1000
    } = options
    method = method.toUpperCase()
    if (method === 'GET') {
      url = url + '?' + data
    }

    XHR.onreadystatechange = function () {
      if (XHR.readyState === 4 && XHR.status === 200) {
        try {
          var res = JSON.parse(XHR.responseText)
          success(res)
        } catch (ex) {
          fail(ex)
        }
      }
    }

    XHR.timeout = timeout
    XHR.open(method, url, true)

    for (let [key, value] of entries(headers)) {
      XHR.setRequestHeader(key, value)
    }

    XHR.send(data)
  }
}
debugger
export default Proxy.create(constants.API)
