function handleArgs(...args) {
  let obj = args? args[0]: {};
  let strs = _.clone(args);
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

function fetchData(defaultValue, ...args) {
  let rs = defaultValue;
  try {
    let { obj, strs } = handleArgs(...args);
    rs = fetchLast(obj, strs);
  } catch (e) {
    rs = defaultValue;
  } finally {
    return rs;
  }
}

export function fetchObject(...args) {
  return fetchData(...args, defaultValue={});
}

export function fetchBoolean(...args) {
  return fetchData(defaultValue=false, ...args);
}

export function fetchString(...args) {
  return fetchData(defaultValue='', ...args);
}

export function fetchNumber(...args) {
  return fetchData(defaultValue=0, ...args);
}

export function fetchArray(...args) {
  return fetchData(defaultValue=[], ...args);
}
