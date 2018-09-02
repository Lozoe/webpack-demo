## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 打包速度优化

- 文件多
- 依赖多
- 页面多

```
分开vendor 和 app (分开第三方和业务代码) （DDLPlugin DDLPreferencePlugin)
代码上线前压缩混淆 UglifyJSPlugin parallel cache
HappyPack loader ThreadPool
babel-loader include exclude options.cacheDirectory
```

其他：
- 减少resolve
- Devtool: 去除sourceMap
- cache-loader
- 升级node webpack
