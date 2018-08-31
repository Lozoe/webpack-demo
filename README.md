# webpack-styleLoader-demo

### 处理CSS

- 引入CSS
- CSS modules
- 配置less sass
- 提取css代码

### 引入CSS
 style-loader style-loader/url style/loader-useable
 css-loader
 

### style-loader style-loader/url style/loader-useable
```javascript
options = {
    insertAt: {String|Object}, //在给定位置处插入 <style></style>
    insertInto: {String}, //给定位置中插入 <style></style>
    singleton: {String}, //是否只使用一个style标签
    transform: {String}, //转化，浏览器环境下，插入页面前
}
```
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


    