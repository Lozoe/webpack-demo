# webpack-html-demo

### 方法
```javascript
自动生成html
场景优化

```
### 自动生成html
HtmlWebpackPlugin
options
    template （自己加loader）
    filename
    minify
    chunks 指定entrychunk excludeChunks
    inject
```
npm i html-webpack-plugin --save-dev
new Webpack.ProvidePlugin({
    $: 'jquery'
})

//如果不是npm 模块，而是本地 可是使用alias
resolve: {
    alias: {
        jquery$: path.resolve(__dirname, 'src/libs/jquery.min.js') //$ 确定只是把jquery关键字解析到某一个目录的文件下，不是解析到某一个目录 确切匹配
    }
},
```

### imports-loader
```
npm i imports-loader --save-dev
```
