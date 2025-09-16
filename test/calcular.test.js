const { expect } = require('chai');
const Calculate = require('../src/calculadora'); 
const { describe, beforeEach, it } = require('mocha');

describe('Calculate', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculate();
  });

  it('Funcion suma: 2 + 2 = 4', () => {
    expect(cal.suma(2, 2)).to.equal(4);
  });

  it('Funcion div: 10 / 2 = 5', () => {
    expect(cal.div(10, 2)).to.equal(5);
  });

  it('Funcion res: 5 - 3 = 2', () => {
    expect(cal.res(5, 3)).to.equal(2);
  });

  it('Funcion mul: 4 * 3 = 12', () => {
    expect(cal.mul(4, 3)).to.equal(12);
  });
});
