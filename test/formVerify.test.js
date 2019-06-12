import formVerify from '../src/utils/formVerify.js';
import chai from 'chai';
import 'babel-polyfill';

let expect = chai.expect;
const isSuccess = true;

describe('formVerify 验证', function() {
  it('手机或者座机验证', function() {
    expect(formVerify.phone('13344445555', isSuccess)).to.be.true;
  });
});