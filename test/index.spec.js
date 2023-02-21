import { expect, assert } from 'chai';

import {
  fetchObject,
  fetchBoolean,
  fetchString,
  fetchNumber,
  fetchArray } from '../src/index';

const jsonData = {
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

const a = 233;
const b = null;
const c = '233';
const d = 'fffff';
const e = true;
const f = false;
const g = undefined;
const h = 11.1111;
const i = {
  b1: 12,
  b2: 12.0,
  b3: 12.01,
  b4: 12.001
};

// const test = fetchBoolean(jsonData, 'c');
// console.log(test);

// const test = fetchBoolean(jsonData.g);
// console.log(test);

describe('fetchObject', () => {
  it('should be object!', () => {
    const test = fetchObject(jsonData, 'c');
    assert.typeOf(test, 'object');
  });

  it('should be object!', () => {
    const test = fetchObject(jsonData, 'd');
    assert.typeOf(test, 'object');
  });

  it('should be equal!', () => {
    const test = fetchObject(jsonData, 'd');
    expect(test).to.eql({});
  });

  it('should be equal!', () => {
    const test = fetchObject(jsonData, 'b');
    expect(test).to.eql({
      b1: 12,
      b2: 12.0,
      b3: 12.01,
      b4: 12.001
    });
  });

  it('should be equal!', () => {
    const test = fetchObject(i);
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
    const obj = fetchBoolean(jsonData, 'b');
    assert.typeOf(obj, 'boolean');
  });

  it('should be boolean!', () => {
    const test = fetchBoolean(jsonData, 'd');
    assert.typeOf(test, 'boolean');
  });

  it('should be equal!', () => {
    const test = fetchBoolean(jsonData, 'd');
    expect(test).to.eql(false);
  });

  it('should be equal!', () => {
    const test = fetchBoolean(jsonData, 'g');
    expect(test).to.eql(true);
  });

  it('should be equal!', () => {
    const test = fetchBoolean(jsonData, 'h');
    expect(test).to.eql(false);
  });

  it('should be equal!', () => {
    const test = fetchBoolean(e);
    expect(test).to.eql(true);
  });

  it('should be equal!', () => {
    const test = fetchBoolean(b);
    expect(test).to.eql(false);
  });

  it('should be equal!', () => {
    const test = fetchBoolean(g);
    expect(test).to.eql(false);
  });
});

describe('fetchString', () => {
  it('should be string!', () => {
    const obj = fetchString(jsonData, 'b');
    assert.typeOf(obj, 'string');
  });

  it('should be string!', () => {
    const test = fetchString(jsonData, 'd');
    assert.typeOf(test, 'string');
  });

  it('should be equal!', () => {
    const test = fetchString(jsonData, 'd');
    expect(test).to.eql('');
  });

  it('should be equal!', () => {
    const test = fetchString(jsonData, 'e');
    expect(test).to.eql('233');
  });

  it('should be equal!', () => {
    const test = fetchString(jsonData, 'c');
    expect(test).to.eql('233');
  });

  it('should be equal!', () => {
    const test = fetchString(jsonData, 'b');
    expect(test).to.eql('{"b1":12,"b2":12,"b3":12.01,"b4":12.001}');
  });

  it('should be equal!', () => {
    const test = fetchString(jsonData, 'a', '1', 'a1');
    expect(test).to.eql('[1,2,3,4]');
  });

  it('should be equal!', () => {
    const test = fetchString(d);
    expect(test).to.eql('fffff');
  });

  it('should be equal!', () => {
    const test = fetchString(b);
    expect(test).to.eql('');
  });

  it('should be equal!', () => {
    const test = fetchString(g);
    expect(test).to.eql('');
  });
});

describe('fetchNumber', () => {
  it('should be number!', () => {
    const obj = fetchNumber(jsonData, 'b');
    assert.typeOf(obj, 'number');
  });

  it('should be number!', () => {
    const test = fetchNumber(jsonData, 'd');
    assert.typeOf(test, 'number');
  });

  it('should be equal!', () => {
    const test = fetchNumber(jsonData, 'd');
    expect(test).to.eql(0);
  });

  it('should be equal!', () => {
    const test = fetchNumber(jsonData, 'b', 'b3');
    expect(test).to.eql(12.01);
  });

  it('should be equal!', () => {
    const test = fetchNumber(jsonData, 'e');
    expect(test).to.eql(233);
  });

  it('should be equal!', () => {
    const test = fetchNumber(h);
    expect(test).to.eql(11.1111);
  });

  it('should be equal!', () => {
    const test = fetchNumber(b);
    expect(test).to.eql(0);
  });

  it('should be equal!', () => {
    const test = fetchNumber(g);
    expect(test).to.eql(0);
  });
});

describe('fetchArray', () => {
  it('should be array!', () => {
    const obj = fetchArray(jsonData, 'b');
    assert.typeOf(obj, 'array');
  });

  it('should be array!', () => {
    const test = fetchArray(jsonData, 'd');
    assert.typeOf(test, 'array');
  });

  it('should be equal!', () => {
    const test = fetchArray(jsonData, 'd');
    expect(test).to.eql([]);
  });

  it('should be equal!', () => {
    const test = fetchArray(b);
    expect(test).to.eql([]);
  });

  it('should be equal!', () => {
    const test = fetchArray(g);
    expect(test).to.eql([]);
  });
});
