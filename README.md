# webpack-init-demo

### tree-shaking
```javascript
webpack watch mode
webpack-dev-server
express + webpack-dev-middleware
```
### webpack watch mode
```javascript
webpack -w
webpack --watch

npm i clean-webpack-plugin --save-dev

webpack -w --progress --display-reasons --color
```
### webpack-dev-server 功能
```
live reloading 浏览器自动刷新
路径重定向
https
浏览器中直接显示编译错误
接口代理
模块热更新 （不刷新浏览器）
```
### webpack-dev-server 配置
```javascript
devServer：

inline 模式 是否使用iframe inline模式
contentBase 内容路径
port 监听的端口
historyApiFallback html5 historyAPI 访问路径不会导致404 rewrite规则
https
proxy
hot
openPage 指定最先打开哪个页面
lazy 刚开始启动服务室不去打包任何东西 只有访问到时才去编译和打包 （多页面应用）
overlay 错误提示 打开的页面给一个遮罩 提示错误
```
### 配置

##### historyApiFallback

```javascript
devServer: {
    port: 9001,
    inline: true, // 指定模式 是否在浏览器显示打包信息
    // historyApiFallback: true
    // HTML5 histroy API rewrite
    historyApiFallback: {
        rewrites: [
            {   
                // 什么样的路径
                from: 'page/a',
                // 转去哪里
                to: 'pages/a.html'
            },
            {   
                // 什么样的路径
                from: /^\/([a-zA-Z0-9]+\/?)([a-zA-Z0-9]+)/,
                // 转去哪里
                to: function (context) {
                    return '/' + context.match[1] + context.match[2] + '.html'
                }
            }
        ]
    }
}
```
##### proxy

```javascript
oprions:

target 指定代理的地址
changeOrigin 改变源到URL 默认false 需要手动设置true
headers 给代理请求加头
logLevel 帮助调试 控制台terminal显示代理信息
pathRewrite 通过简短地址访问远程长的地址

devServer: {
    port: 9001,
    proxy: {
        // '/api': {
        //     target: 'https://m.weibo.cn',
        //     changeOrigin: true,
        //     logLevel: 'debug',
        // } 
        '/': {
            target: 'https://m.weibo.cn',
            changeOrigin: true,
            logLevel: 'debug',
            pathRewrite: {
                '^comments': '/api/comments'
            },
            headers: {
                'Cookie': '_T_WM=044532f80b8fabc6dc347fd417c33202; ALF=1517569014; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WhQljxrwvAfCCZa_p.u8pB.5JpX5K-hUgL.Fo2cS0qRehBcSKM2dJLoI7HpqJ8XwBtt; SCF=AkQsXaaTywl0RziwnumQ0tVE_xW5udcpoGP43q7eb2tFW9lXRc4bVNOn9N5m_ZKwFc-Q2r4Hz5oMBAbVJuhI1uk.; SUB=_2A253SLARDeRhGedI7FQZ8CrKzjuIHXVUstBZrDV6PUJbktANLUXEkW1NVtAHXD7nHQtwFntsDZsmqj2nB17cClnd; SUHB=0k1zt1ckxYq3c6; H5_INDEX_TITLE=qbaty; H5_INDEX=0_all; WEIBOCN_FROM=1110006030; M_WEIBOCN_PARAMS=oid%3D4193586758833502%26luicode%3D20000061%26lfid%3D4193594443440569%26uicode%3D20000061%26fid%3D4193586758833502'
            }
        }
    }
```

##### Module Hot Reloading

- 保持应用的数据状态（tab页切换了 组件的状态展开到哪里 请求了哪些数据）
- 节省调试时间
- 样式调试更快
```javascript
devServer.hot true 
webpack.hotModuleReplacementPlugin 
模块的相对路径
webapck.NamedModulesPlugin
```
```javascript
module.hot
module.hot.accept // 1、依赖 2、以来更新后执行的回调
module.hot.decline // 拒绝给一些需要依赖的模块来更新， 接受一个模块或者数组多个模块
```
