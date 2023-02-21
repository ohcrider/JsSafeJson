"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchObject = fetchObject;
exports.fetchBoolean = fetchBoolean;
exports.fetchString = fetchString;
exports.fetchNumber = fetchNumber;
exports.fetchArray = fetchArray;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function handleRest() {
  for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }

  var obj = rest ? rest[0] : {};
  var strs = clone(rest);
  strs.shift();
  return {
    obj: obj,
    strs: strs
  };
}

function fetchLast(obj, strs) {
  if (strs.length === 0) {
    return obj;
  }

  var tempStrs = clone(strs);
  var tempStr = strs[0];
  var tempObj = obj[tempStr];

  if (tempStrs.length === 1) {
    return tempObj;
  }

  tempStrs.shift();
  return fetchLast(tempObj, tempStrs);
}

function fetchData(defaultValue) {
  var rs = defaultValue;

  try {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }

    var _handleRest = handleRest.apply(void 0, rest),
        obj = _handleRest.obj,
        strs = _handleRest.strs;

    var tempRs = fetchLast(obj, strs);

    if (isNumber(defaultValue) && isString(tempRs)) {
      tempRs = Number(tempRs);
    }

    rs = tempRs ? tempRs : defaultValue;

    if (typeof defaultValue === 'string') {
      if (_typeof(rs) === 'object') {
        rs = JSON.stringify(rs);
      } else {
        rs = "".concat(rs);
      }
    }

    if (_typeof(rs) !== _typeof(defaultValue)) {
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

function fetchObject() {
  for (var _len3 = arguments.length, rest = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    rest[_key3] = arguments[_key3];
  }

  return fetchData.apply(void 0, [{}].concat(rest));
}

function fetchBoolean() {
  for (var _len4 = arguments.length, rest = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    rest[_key4] = arguments[_key4];
  }

  return fetchData.apply(void 0, [false].concat(rest));
}

function fetchString() {
  for (var _len5 = arguments.length, rest = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    rest[_key5] = arguments[_key5];
  }

  return fetchData.apply(void 0, [''].concat(rest));
}

function fetchNumber() {
  for (var _len6 = arguments.length, rest = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    rest[_key6] = arguments[_key6];
  }

  return fetchData.apply(void 0, [0].concat(rest));
}

function fetchArray() {
  for (var _len7 = arguments.length, rest = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    rest[_key7] = arguments[_key7];
  }

  return fetchData.apply(void 0, [[]].concat(rest));
}