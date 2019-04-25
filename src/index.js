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

    if (_.isNumber(defaultValue) && _.isString(tempRs)) {
      tempRs = Number(tempRs);
    }

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
