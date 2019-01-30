const utils = require('./utils');
const expect = require('expect');

describe('utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      let res = utils.add(33,11);
      expect(res).toBe(44).toBeA('number');
    });
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4,3,(sum)=>{
      expect(sum).toBe(7).toBeA('number');
      done();
    })
  })

  it('should square a number', () => {
    let res = utils.square(5);
    expect(res).toBe(25).toBeA('number');
    // if (res !== 25){
    //   throw new Error(`Expected 25 but got ${res}`);
    // }
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(3,(res)=>{
      expect(res).toBe(9).toBeA('number');
      done();
    })
  })

  it('should set users first and last name', () => {
    let user = {};
    let res = utils.setName(user,'Ben Terry');
    expect(res).toInclude({
      firstName: 'Ben',
      lastName: 'Terry'
    }).toBeA('object');
  });
});
