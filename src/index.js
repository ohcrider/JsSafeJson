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

function fetchData(...args, defaultValue) {
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
  return fetchData(...args, defaultValue=false);
}

export function fetchString(...args) {
  return fetchData(...args, defaultValue='');
}

export function fetchNumber(...args) {
  return fetchData(...args, defaultValue=0);
}

export function fetchArray(...args) {
  return fetchData(...args, defaultValue=[]);
}
