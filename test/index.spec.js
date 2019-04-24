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
      let test = fetchObject(jsonData, 'c');
      assert.typeOf(test, 'object');
    });

    it('should be object!', () => {
      let test = fetchObject(jsonData, 'd');
      assert.typeOf(test, 'object');
    });

    it('should be equal!', () => {
      let test = fetchObject(jsonData, 'd');
      expect(test).to.eql({});
    });
  });
});

describe('fetchBoolean', () => {
  describe('fetchBoolean function', () => {
    it('should be boolean!', () => {
      let obj = fetchBoolean(jsonData, 'b');
      assert.typeOf(obj, 'boolean');
    });

    it('should be boolean!', () => {
      let test = fetchBoolean(jsonData, 'd');
      assert.typeOf(test, 'object');
    });

    it('should be equal!', () => {
      let test = fetchBoolean(jsonData, 'd');
      expect(test).to.eql(false);
    });
  });
});

describe('fetchString', () => {
  describe('fetchString function', () => {
    it('should be string!', () => {
      let obj = fetchString(jsonData, 'b');
      assert.typeOf(obj, 'string');
    });
  });
});

describe('fetchNumber', () => {
  describe('fetchNumber function', () => {
    it('should be number!', () => {
      let obj = fetchNumber(jsonData, 'b');
      assert.typeOf(obj, 'number');
    });
  });
});

describe('fetchArray', () => {
  describe('fetchArray function', () => {
    it('should be array!', () => {
      let obj = fetchArray(jsonData, 'b');
      assert.typeOf(obj, 'array');
    });
  });
});
