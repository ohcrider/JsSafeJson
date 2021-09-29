function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function isNumber(obj) {
  return typeof obj === 'number';
}

function isString(obj) {
  return typeof obj === 'string';
}

function isArray(obj) {
  return obj.constructor === Array;
}

function handleRest(...rest) {
  let obj = rest? rest[0]: {};
  let strs = clone(rest);
  strs.shift();

  return { obj, strs };
}

function fetchLast(obj, strs) {
  let tempStrs = clone(strs);
  let tempStr = strs[0];
  let tempObj = obj[tempStr];

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

    if (isNumber(defaultValue) && isString(tempRs)) {
      tempRs = Number(tempRs);
    }

    rs = tempRs? tempRs: defaultValue;

    if (typeof defaultValue === 'string') {
      if (typeof rs === 'object') {
        rs = JSON.stringify(rs);
      } else {
        rs = `${rs}`;
      }
    }

    if (typeof rs !== typeof defaultValue) {
      rs = defaultValue;
    }

    if (isArray(defaultValue) && !isArray(rs)) {
      rs = defaultValue;
    }
  } catch (e) {
    // console.log(e);
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
