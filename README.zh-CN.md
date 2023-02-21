[English](./README.md)|[中文简体](./README.zh-CN.md)

### 关于
可以更加安全、简单地处理JSON数据

### 安装
```
npm install js-safe-json
```

### 本地开发
```
npm run start
```

### 测试脚本
```
npm run test
```

### 使用方法
```
import {
  fetchObject,
  fetchBoolean,
  fetchString,
  fetchNumber,
  fetchArray } from 'js-safe-json';

// 需要处理的JSON数据
let jsonData = {
  a: [
    {
      a1: '',
      a2: true,
      a3: false,
    },
    {
      a1: [1, 2, 3, 4],
      a2: true,
      a3: false,
    },
  ],
  b: {
    b1: 12,
    b2: 12.0,
    b3: 12.01,
    b4: 12.001
  },
  c: 0,
  d: null,
  e: '0'
};

// 类型安全，如果获取不到预期的值，它会返回默认值
// object  默认值: {}
// boolean 默认值: false
// string  默认值: ''
// number  默认值: 0
// array   默认值: []

let object = fetchObject(jsonData, 'b');
let boolean = fetchBoolean(jsonData, 'b');
let string = fetchString(jsonData, 'e');
let number = fetchNumber(jsonData, 'b', 'b1');
let array = fetchArray(jsonData, 'a');
```

### License
Copyright (C) 2019 fewspider

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
