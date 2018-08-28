# webpack-ts-demo

### 运行
```
npm install
typings install
```

### 安装
```
npm install typescript ts-loader --save-dev
npm install typescript awesome-typescript-loader --save-dev
```
### 配置

tsconfig.json

webpack.config.js

https://www.tslang.cn/docs/handbook/compiler-options.html

### 初始化项目
```
npm init

npm install webpack typescript ts-loader awesome-typescript-loader --save-dev

mkdir src
touch webpack.config.js
touch tsconfig.json
```

### 类型检测
（一）
```
npm install @types/lodash --save
npm install @types/vue --save
......
```
（二）
```
npm install typings -g
typings install lodash --save
```

### 配置typeRoots
```javascript
"typeRoots": [
    "./node_modules/@type",
    "./typings/modules"
]
```
    