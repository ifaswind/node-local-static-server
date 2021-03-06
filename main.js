const express = require('express');
const path = require('path');

// 默认端口
let port = 6789;

// 解析命令行参数
for (let i = 2; i < process.argv.length; i += 2) {
	switch (process.argv[i]) {
		case '--port': case '-p':
			port = process.argv[i + 1];
			break;
	}
}

// 创建实例
const app = express();

// 监听请求
app.use((req, res, next) => {
	console.log('访问文件', req.url);
	next();
});

// 静态目录
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// 启动服务并监听端口
app.listen(port, () => {
	console.log('本地静态服务器已启动！');
	console.log(`监听端口：${port}`);
	console.log(`目录地址：http://localhost:${port}/`);
});
