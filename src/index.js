import * as _ from 'underscore';

function handleRest(...rest) {
  let obj = rest? rest[0]: {};
  let strs = _.clone(rest);
  strs.shift();

  return {obj, strs};
}

function fetchLast(obj, strs) {
  var tempStrs = _.clone(strs);
  var tempStr = strs[0];
  var tempObj = obj[tempStr];

  if (tempStrs.length === 1) {
    return tempObj;
  }

  tempStrs.shift();
  return fetchLast(tempObj, tempStrs);
}

function fetchData(defaultValue, ...rest) {
  let rs = defaultValue;
  try {
    let { obj, strs } = handleRest(...rest);
    let tempRs = fetchLast(obj, strs);
    rs = tempRs? tempRs: defaultValue;

    if (typeof rs !== typeof defaultValue) {
      rs = defaultValue;
    }

    if (_.isArray(defaultValue) && !_.isArray(rs)) {
      rs = defaultValue;
    }
  } catch (e) {
    console.log(e);
    rs = defaultValue;
  } finally {
    return rs;
  }
}

export function fetchObject(...rest) {
  return fetchData({}, ...rest);
}

export function fetchBoolean(...rest) {
  return fetchData(false, ...rest);
}

export function fetchString(...rest) {
  return fetchData('', ...rest);
}

export function fetchNumber(...rest) {
  return fetchData(0, ...rest);
}

export function fetchArray(...rest) {
  return fetchData([], ...rest);
}

// let jsonData = {
//   a: [
//     {
//       a1: '',
//       a2: true,
//       a3: false,
//     },
//     {
//       a1: [1, 2, 3, 4],
//       a2: true,
//       a3: false,
//     },
//   ],
//   b: {
//     b1: 12,
//     b2: 12.0,
//     b3: 12.01,
//     b4: 12.001
//   },
//   c: 0,
//   d: null,
//   e: '0'
// };
//
// const a1 = fetchObject(jsonData, 'b');
// console.log('fetchObject:');
// console.log(a1);
//
// const a2 = fetchBoolean(jsonData, 'b');
// console.log('fetchBoolean:');
// console.log(a2);
//
// const a3 = fetchString(jsonData, 'b');
// console.log('fetchString:');
// console.log(a3);
//
// const a4 = fetchNumber(jsonData, 'b');
// console.log('fetchNumber:');
// console.log(a4);
//
// const a5 = fetchArray(jsonData, 'b');
// console.log('fetchArray:');
// console.log(a5);
