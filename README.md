# webpack-long cache-demo

### 长缓存优化
```javascript
<!--一、改变app,vendor变化-->
提取vendor
hash->chunkHash
提取Webpack runtime
<!--二、引入新模块  模块顺序变化， vendor hash变化-->
思路：给chunks & module模块使用name标识 而非ID
NamedChunkedPlugin
NamedModulesPlugin
<!--三、动态引入新模块 ，vendor hash变化-->
定义动态模块的chunkName

import(/* webpackChunkName: 'async' */'./async').then(function(a) {
    console.log(a)
}) 
```
### 总结

- 独立打包vendor 分离第三方插件和业务代码 完全独立打包vendor
- 抽出manifest(webpack runtime webpack打包时runtime代码会变化，为了让runtime的变化不影响vendor， 可以抽取 并且直接inline到html)  
- NamedChunkedPlugin
- NamedModulesPlugin (给定chunk和module不再是由webpack随机分配的从[0]-...的id,而是确切的不会随代码变化或者顺序变化而变化的id)
- 动态载入模块给定模块名称

通过以上方法保证在打包第三方代码或者公用代码时，尽可能保证使用长缓存，保证版本号不再变化，保证用户浏览网站时尽可能使用缓存，加快访问速度和性能。
