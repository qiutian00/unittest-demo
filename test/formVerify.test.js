import formVerify from '../src/utils/formVerify.js';
import chai from 'chai';
import 'babel-polyfill';

let expect = chai.expect;
const isSuccess = true;

describe('formVerify 验证', function() {

  describe('手机或者座机验证', function() {
    it('正常手机号', function() {
      expect(formVerify.phone('13344445555', isSuccess)).to.be.true;
    });
    it('不正常手机号', function() {
      expect(formVerify.phone('1334444555', isSuccess)).to.be.false;
    });

    it('正常座机号', function() {
      expect(formVerify.phone('0731-84153885', isSuccess)).to.be.true;
    });
    it('不正常座机号', function() {
      expect(formVerify.phone('0731sdfsd', isSuccess)).to.be.false;
    });
  });

  describe('正整数校验', function() {
    it('正数', function() {
      expect(formVerify.number('8', isSuccess)).to.be.true;
    });

    it('负数', function() {
      expect(formVerify.number('-8', isSuccess)).to.be.false;
    });

    it('临界值', function() {
      expect(formVerify.number('0', isSuccess)).to.be.true;
    });
  });

});