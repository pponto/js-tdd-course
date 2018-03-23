/*
Desafio FizzBuzz

Escreva uma lib que:

Se o número for divisível por 3, no lugar do número escreva 'Fizz'
Se o número for divisível por 5, no lugar do número escreva 'Buzz'
Se o número for divisível por 3 e por 5, no lugar do número escreva 'FizzBuzz'
Se não for múltiplo de nada, retorna o número
*/
import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('FizzBuzz', () => {
  it('should return `Fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(18)).to.be.equal('Fizz');
  });
  it('should return `Buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(20)).to.be.equal('Buzz');
  });
  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
    expect(FizzBuzz(30)).to.be.equal('FizzBuzz');
  });
  it('should return the number when non-multiple', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });
  it('shoul return 0 when 0', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});



/*
Calculadora
import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {
// smoke test
  describe('Smoke Tests', () => {

    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a.function;
    });
    it('should exist the method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a.function;
    });
    it('should exist the method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a.function;
    });
    it('should exist the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a.function;
    });

  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2,2)).to.be.equal(4);
    });
  });
  describe('Sub', () => {
    it('should return 6 when `sub(8,2)`', () => {
      expect(sub(8,2)).to.be.equal(6);
    });
    it('should return -4 when `sub(8,12)`', () => {
      expect(sub(8,12)).to.be.equal(-4);
    });
  });
  describe('Mult', () => {
    it('should return 20 when `mul(10,2)`', () => {
      expect(mult(10,2)).to.be.equal(20);
    });
  });
  describe('Div', () => {
    it('should return 30 when `div(60,2)`', () => {
      expect(div(60,2)).to.be.equal(30);
    });
    it('should return `não é possível divisão por zero!` when divided by 0', () => {
      expect(div(60,0)).to.be.equal('não é possível divisão por zero!');
    });
  });

});
*/
