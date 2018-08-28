# webpack-es6-demo

### es6/7打包编译
- Babel
- Babel-presets
- Babel-plugin


### Babel
babel-loader(运行速度慢) babeljs.io
```
npm install babel-loader@8.0.0-beta.0 @babel-core

npm install babel-loader babel-core --save-dev
```

### 项目构建
```
npm init //初始化项目

npm install babel-loader babel-core --save-dev

创建webpack.config.js 配置entry output loader
```

### Babel-Presets

配置好babel-loader之后 需要根据babel-presets规范打包

简单例举：
```
es2015
es2016
es2017
env(经常用 包括2015-2017 以及最近的新发布的)
babel-presets-react(自定义)
babel-presets-stade 0-3
```

##### 安装：
```
npm install @babel/preset-env --save-dev（最新版本）
或者
npm install babel/preset-env --save-dev（普通版本）

```
##### 配置：
```
module: {
    rules: [
        {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            exclude: '/node_modules/'
        }
    ]
}
```

targets参数：

根据指定的目标指定哪些语法需要编译 targets.browsers

```
targets.browsers: 'last 2 versions'
targets.browsers: '> 1%' 占有率百分之1 
```

browserslist(github)项目，数据来自Can I Use

### 插件

Babel-Polyfill

Babel Runtime Transform

函数和方法：
```
Generator
Set 
Map
Array.from
Array.prototype.includes
```
没有被babel处理 需要借助babel-plugin

##### Babel-Polyfill垫片

1. 全局垫片
2. 为应用准备

使用：
```
npm install babel-polyfill --save
import 'babel-polyfill'
```

##### Babel Runtime Transform
1. 局部垫片
2. 为框架准备
3. 当代码中使用它时，其他的函数如果使用到es6 7方法时，会把每一个方法打包到单独的文件里面，只要引用到都会，但是使用这个插件的话会作为一个独立的整体直接打包进去，每个文件之间的多余的相同的代码不会再有


使用：

```
npm install babel-plugin-transform-runtime --save-dev
npm install babel-runtime --save
```
根目录下：.babelrc


