const { expect } = require("chai");
const isOddOrEven = require('../test.js');

describe('isOddOrEven', () => {
    it('isString', () => {
        expect(isOddOrEven(3)).to.undefined
    })

    it('isOdd', () => {
        expect(isOddOrEven('s')).to.equal('odd')
    })

    it('isEven', () => {
        expect(isOddOrEven('sdre')).to.equal('even')
    })
})