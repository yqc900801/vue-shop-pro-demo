// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
//导入Gzip压缩的中间件
const compression = require('compression')

// 注册中间件，启用Gzip压缩
app.use(compression())

app.use(express.static('./dist'))

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(12306, function() {
  console.log('Express server running at http://127.0.0.1:12306')
})
