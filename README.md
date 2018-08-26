# webpack-init-demo

### 如何运行
```
npm install
webpack
```
在浏览器访问index.html

### 使用

- Weppack命令
- Weppack配置
- 第三方的脚手架
```
webpack -h 帮助
webpack -v 版本
webapck <entry> [<entry>] <output>

```

### Weppack命令 项目构建步骤

```
mkdir webpack-demo && cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```
然后创建目录：
```
  webpack-demo
  |- package.json
+ |- webpack.config.js
  |- /dist
    |- index.html
  |- /src
    |- index.js
```

### webpack-cli
交互式初始化项目
版本迁移V1->V2 https://github.com/webpack/webpack-cli/blob/master/MIGRATE.md

### Weppack配置
```
webpack
webpack --config webpack.conf.dev.js
```
### 第三方的脚手架

1. Vue-cli
2. Angular-cli
3. React-starter