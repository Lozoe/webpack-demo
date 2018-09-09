# 多页应用

### 多页面应用
#### 特点
- 多入口 entry
- 多页面html
- 每个页面不同的chunk
- 每个页面不同的参数

#### 方法
多配置
单配置

##### 多配置
webpack 3.1.0
parallel-webpack

parallel-webpack --watch
parallel-webpack --config

优点：
使用parallel-webpack提高打包速度
配置更加独立、灵活

缺点：不能多页面之间共享代码

webpack-merge 多配置合并成一个
webpack
html-webpack-plugin 生成html页面
clean-webpack-plugin 删除之前的打包目录 重新打包
extract-text-webpack-plugin 

npm i webpack-merge webpack html-webpack-plugin clean-webpack-plugin extract-text-webpack-plugin --save-dev

npm i style-loader css-loader --save-dev

npm i parallel-webpack --save-dev  
node_modules/parallel-webpack/bin/run.js

##### 单配置
优点：
可以共享各个entry之间的公用代码

缺点：
打包速度比较慢输出的内容比较复杂

webpack --config webpack.config.single.js

