const { add, notSum } = require('../src/utils'); 

test('adds -1 + 1 to equal 0', () => {
    expect(add(-1, 1)).toBe(0);
  });

test('adds 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toBe(0);
});

test('throw on invalid input', () => {
    expect(() => {
        notSum('a');
    }).toThrow(Error);
  });