const { add, notSum, isTaskComplete } = require('../src/utils'); 

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

test('task with done: true returns true', () => {
    expect(isTaskComplete({ title: "Laundry", done: true })).toBe(true);
});

test('task with done: false returns false', () => {
    expect(isTaskComplete({ title: "Dishes", done: false })).toBe(false);
});

test('task without done property returns false', () => {
    expect(isTaskComplete({ title: "Shopping" })).toBe(false);
});