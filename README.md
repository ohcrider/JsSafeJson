[English](./README.md)|[中文简体](./README.zh-CN.md)

### about
handle json data with safe & easy way

### why
Modern web frameworks, such as React and Vue, mostly render based on JSON data.

Ideally, as long as the back-end and front-end render web pages according to the agreed JSON data type, there will be no errors.
However, in the real world, in the agile and rapid development mode, or because of later business adjustments or personnel changes, some data types change, and new risks are introduced at this time, such as a white screen and a webpage crash. At this time, if you spend a lot of time and energy to troubleshoot this type of error, it will not be conducive to business adjustment and bug follow-up.

It is better to deal with it from the beginning, so as to avoid the problem that the web page crashes and cannot be rendered due to the change of the JSON data type.

### install
```
npm install js-safe-json
```

### dev
```
npm run start
```

### run test
```
npm run test
```

### usage
```
import {
  fetchObject,
  fetchBoolean,
  fetchString,
  fetchNumber,
  fetchArray } from 'js-safe-json';

// your json data
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

// it is safe,if data not expect value,it will return default value
// object  default value: {}
// boolean default value: false
// string  default value: ''
// number  default value: 0
// array   default value: []

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
