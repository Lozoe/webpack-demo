# webpack-packReasultAnalyse-demo

### 工具
```javascript
Official Analyze Tool
Webpack-bundle-analyzer
```
### Official Analyze Tool
```
webpack --profile --json > stats.json
webpack --profile --json | Out-file 'stats.json' -EncodingOEM

http://webpack.github.io/analyse/
```
### webpack-bundle-analyzer
```
插件
BundleAnalyzerPlugin

命令行
webpack-bundle-analyzer stats.json
http://webpack.github.io/analyse/ 上传stats.json
```

### Webpack-bundle-analyzer
```javascript
npm i webpack-bundle-analyzer --save-dev
```

webpack --display-modules