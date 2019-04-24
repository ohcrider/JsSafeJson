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
  fetchArray } from 'js-safej-son';

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
let array = fetchNumber(jsonData, 'a');
```
