# webpack-demo

## 一、环境准备

- 命令行工具 
- Node + Npm
- Webpack

##### 命令行工具
mac Terminal 

iTerm2: http://www.iterm2.com/
zsh: http://ohmyz.sh/

##### Node
node官网：Macintosh installer
或者 `npm i node@xxx`

##### Webpack
```
npm i webpack -g
```
如果有权限错误的解决方案：
https://docs.npmjs.com/getting-started/fixing-npm-permissions

## 二、简述Webpack

- 概述
- 版本更迭
- 功能进化
- 版本迁移

##### 1、概述

本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

官网：https://webpack.js.org/
中文：https://webpack.docschina.org
github: https://github.com/webpack/webpack

##### 2、版本更迭
大概经历这样的版本迭代：

- webpack v1.0.0 -- 2014.02.20
- webpack v2.2.0 -- 2017.01.18
- webpack v3.0.0 -- 2017.06.19
- webpack v4.0.0 -- 2018.02.25

https://github.com/webpack/webpack/releases
##### 3、功能进化

###### webpack v1
1. 编译打包
2. HMR（代码热更新）
3. 代码分割
4. 文件处理（loader,plugin）

###### webpack v2
1. Tree-Shaking

打包以后的代码会体积更小，并不会把引入但是并没有使用的代码全部删除。


2. ES Module

V1必须使用 babel-loader 支持ES语法
V2import export语法可以直接使用 webpack净化

3. 动态Import

V1 动态引用必须使用require.ensure
V2 import(path)

4. 新的文档

###### webpack v3

1. Scope Hoisting(作用域提升)
2. Magic Comments(配合动态Import使用)

Scope Hoisting(作用域提升)

打包以后代码性能的提升
老版本：
把每一个模块都包裹在单独的一个函数的闭包中，从而实现模块系统。我们知道，闭包越多，对浏览器的损耗越大，所以封装的这些函数会使浏览器运行的性能下降。
V3:会将所有的代码的模块的作用域提到单一的闭包的中。保证浏览器的运行速度。（rollup）

Magic Comments(配合动态Import使用)

配合动态Import使用，指定webpack懒加载import代码，打包后的名字不可预知，Magic Comments可以指定打包以后的文件名字。

##### 版本迁移

https://www.webpackjs.com/guides/migrating/

## 三、核心

- Entry
- Output
- Loaders
- Plugins

##### 1.Entry

- 代码的入口
- 打包的入口
- 单个或多个
```javascript
//3种写法
// 单入口
module.exports = {
    entry: 'index.js'
}
// 多个文件 根据文件创建多个入口
module.exports = {
    entry: ['index.js', 'verdor.js']
}
// key value
module.exports = {
    entry: {
        index: ['index.js', 'app.js'],
        verdor: 'vendor.js'
    }
}
```

推荐第三种写法，前两种并不是完全知道打包中文件的名字，也没有办法识别它们，因为只是指定了entry这个属性，但是在第三种写法中每个文件有key,表示独特的chunk(代码块)

对象写法的好处：

> 1）知道每一个entry的key

> 2）便于继续添加入口文件

##### 2.Output

- 打包生成的文件bundle
- 单个或多个
- 自定义规则
- 配合CDN
```javascript
//3种写法
// 单入口
module.exports = {
    entry: 'index.js',
    output: {
        filename: 'index.min.js'
    }
}
// 多个文件
module.exports = {
    entry: {
        index: 'index.js',
        verdor: 'vendor.js'
    },
    output: {
        filename: '[name].min.[hash:5].js'
    }
}
```
##### 3.Loaders
- 处理文件
- 转换为模块

```javascript
module.exports = {
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: 'css-loader'
      },
      { 
        test: /\.ts$/, 
        use: 'ts-loader' 
          
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  }
};
```
常用的Loader:

编译：babel-loader、ts-loader

样式：style-loader、css-loader、less-loader、postcss-loader

文件：file-loader、url-loader

##### 4.Plugins

- 参与打包的整个过程
- 打包优化和压缩
- 配置打包编译时的变量
- ......


```javascript
const webpack = require('webpack');
module.exports = {
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}
```

常用的Plugins：

优化：CommonsChunkPlugin、UglifyJsWebpackPlugin

功能：ExtractTextWebpackPlugin(css提取打包单独的css文件)、HtmlWebpackPlugin(帮助生成html)、HotModuleReplacementPlugin(模块热更新)、CopyWebpackPlugin(帮助拷贝文件)

名字解释：

Chunk: 代码块， webpack打包中默认会把代码分成一个一个的代码块，有时会认为是一个代码块，当有动态懒加载配置时，会把懒加载的文件当成一个代码块，再比如commonsChunkPlugin会把不同模块公用的部分独立提取出来作为新的chunk

Bundle: 一捆，一束。代码被打包过以后。

Module: 模块，loaders会把一个一个的文件转化为模块，比如说一个图片或者css处理完成后即Wie一个模块。

