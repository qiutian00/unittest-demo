import chai from 'chai';
import 'babel-polyfill';

let expect = chai.expect;

describe('null or undefined or \'\'', function() {

    it('null校验', function() {
        expect('null').to.be.empty;
    });
    it('undefined校验', function() {
        expect(undefined).to.be.empty;
    });
    it('\'\'校验', function() {
        expect('').to.be.empty;
    });
    it('[]校验', function() {
        expect([]).to.be.empty;
    });
    it('{}校验', function() {
        expect({}).to.be.empty;
    });

});