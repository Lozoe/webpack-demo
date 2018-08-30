# webpack-codeSplitAndLazyLoad-demo

### webpack代码分割和懒加载

- webpack methods
- ES2015 Loader spec

### webpack methods
require.ensure
```javascript
require.ensure(
  dependencies: String[], // 加载进来并不会执行 而是在callback中，需要require ensure的代码，这时才会真正的执行
  callback: function(require),
  errorCallback: function(error),
  chunkName: String
)
```
ps：require.ensure对原生的promise强依赖，如果浏览器不支持，需要垫片。

require.include
模块引入进来，但是不执行

当两个子模块都依赖第三方模块，可以提前把第三方模块直接放在父模块里面，动态加载子模块时，不会再重复加载。

### ES2015 Loader spec
```javascript
System.import() => import()
import() => Promise
import().then(() => {})
```
```javascript
// Single target
import(
  /* webpackChunkName: "my-chunk-name" */
  /* webpackMode: "lazy" */
  'moduleName'
);
```
### 应用场景

1. 分离业务代码和第三方依赖
2. 分离业务代码和和业务公共代码和第三方依赖
3. 分离首次加载和访问后加载的代码


    