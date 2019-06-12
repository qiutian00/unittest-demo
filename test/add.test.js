import add from '../src/src_test/add.js';
import chai from 'chai';
import 'babel-polyfill';

// var should = require('should');
// var lib = require('../src/add.js');

let expect = chai.expect;

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});