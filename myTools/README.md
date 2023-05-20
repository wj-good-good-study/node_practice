<!-- 说明文档 -->
## 安装
```
npm install wj-first-tools
```

## 导入
```js
const tool = require('wj-first-tool')
```

## 格式化代码
```js
// 调用dateFormat对时间进行格式化
const dtStr = tool.dateFormat(new Date())
```

## 转译HTML中的特殊字符
```js
const htmlStr = '<h1>你好</h1>'
const str = tool.htmlEscape(htmlStr)
```

## 开源协议
ISC