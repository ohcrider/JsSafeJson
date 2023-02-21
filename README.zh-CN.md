[English](./README.md)|[中文简体](./README.zh-CN.md)

### 关于
可以更加安全、简单地处理JSON数据

## 为什么需要使用它
现代的Web框架，比如 React、Vue，大部分都是根据 JSON 数据渲染。

理想情况下，后端跟前端只要按照约定的 JSON 数据类型，来渲染网页就不会出错。
但是现实世界中，处于敏捷开发的模式，或因为后期业务的调整，或人员发生改变，部分数据类型发生变化，这时候就引进来了新的风险，比如白屏了网页崩溃了。这个时候如果花费大量的时间跟精力，去排查这类型错误，不利于业务的调整跟 BUG 跟进。

不如一开始就做好处理，这样就可以避免因为 JSON 数据类型发生改变，网页因此崩溃，无法渲染出来的问题。

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
