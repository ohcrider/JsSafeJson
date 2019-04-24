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
  c: 233,
  d: null,
  e: '233',
  f: 'fffff',
  g: true,
  h: false
};

describe('fetchObject', () => {
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

  it('should be equal!', () => {
    let test = fetchObject(jsonData, 'b');
    expect(test).to.eql({
      b1: 12,
      b2: 12.0,
      b3: 12.01,
      b4: 12.001
    });
  });
});

describe('fetchBoolean', () => {
  it('should be boolean!', () => {
    let obj = fetchBoolean(jsonData, 'b');
    assert.typeOf(obj, 'boolean');
  });

  it('should be boolean!', () => {
    let test = fetchBoolean(jsonData, 'd');
    assert.typeOf(test, 'boolean');
  });

  it('should be equal!', () => {
    let test = fetchBoolean(jsonData, 'd');
    expect(test).to.eql(false);
  });

  it('should be equal!', () => {
    let test = fetchBoolean(jsonData, 'g');
    expect(test).to.eql(true);
  });

  it('should be equal!', () => {
    let test = fetchBoolean(jsonData, 'h');
    expect(test).to.eql(false);
  });
});

describe('fetchString', () => {
  it('should be string!', () => {
    let obj = fetchString(jsonData, 'b');
    assert.typeOf(obj, 'string');
  });

  it('should be string!', () => {
    let test = fetchString(jsonData, 'd');
    assert.typeOf(test, 'string');
  });

  it('should be equal!', () => {
    let test = fetchString(jsonData, 'd');
    expect(test).to.eql('');
  });

  it('should be equal!', () => {
    let test = fetchString(jsonData, 'e');
    expect(test).to.eql('233');
  });
});

describe('fetchNumber', () => {
  it('should be number!', () => {
    let obj = fetchNumber(jsonData, 'b');
    assert.typeOf(obj, 'number');
  });

  it('should be number!', () => {
    let test = fetchNumber(jsonData, 'd');
    assert.typeOf(test, 'number');
  });

  it('should be equal!', () => {
    let test = fetchNumber(jsonData, 'd');
    expect(test).to.eql(0);
  });

  it('should be equal!', () => {
    let test = fetchNumber(jsonData, 'b', 'b3');
    expect(test).to.eql(12.01);
  });
});

describe('fetchArray', () => {
  it('should be array!', () => {
    let obj = fetchArray(jsonData, 'b');
    assert.typeOf(obj, 'array');
  });

  it('should be array!', () => {
    let test = fetchArray(jsonData, 'd');
    assert.typeOf(test, 'array');
  });

  it('should be equal!', () => {
    let test = fetchArray(jsonData, 'd');
    expect(test).to.eql([]);
  });
});
