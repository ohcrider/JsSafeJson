import { expect, assert } from 'chai';

import {
  fetchObject,
  fetchBoolean,
  fetchString,
  fetchNumber,
  fetchArray } from '../src/index';

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

describe('fetchObject', () => {
  describe('fetchObject function', () => {
    it('should be object!', () => {
      const obj = fetchObject(jsonData, 'b');
      assert.typeOf(obj, 'object');
    })
  })
})
