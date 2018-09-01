# webpack-tree-shaking-demo

### tree-shaking
```javascript
JS Tree Shaking
CSS Tree Shaking
```
### 使用场景
- 常规优化 代码体积更小，用户加载更快
- 引入第三方库 比如lodash boostrap moment

### JS tree-shaking 配置
本地Tree Shaking:

new Webpack.optimize.UglifyJsPlugin()

第三方库：
比如lodash
npm i lodash --save 72kb
npm i lodash-es --save 139kb
npm i babel-plugin-lodash --save-dev
npm i babel-loader babel-core babel-preset-env --save-dev

```javascript
{
    test: /\.js$/,
    use: [
        {
            loader: 'babel-loader',
            options: {
                presets: ['env'],
                plugins: ['lodash']
            }
        }
    ]
}
```

### CSS tree-shaking
```javascript
Purify CSS
https://github.com/purifycss/purifycss

purify-webpack

```