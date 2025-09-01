const { add, notSum, isTaskComplete, isTaskOverdue } = require('../src/utils'); 

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

test('task overdue when dueDate is before today', () => {
    expect(isTaskOverdue({ dueDate: "2024-02-01" }, "2024-02-02")).toBe(true);
});

test('task not overdue when dueDate is after today', () => {
    expect(isTaskOverdue({ dueDate: "2024-02-03" }, "2024-02-02")).toBe(false);
});

test('task not overdue when dueDate equals today', () => {
    expect(isTaskOverdue({ dueDate: "2024-02-02" }, "2024-02-02")).toBe(false);
});

test('throw error for invalid date format', () => {
    expect(() => {
        isTaskOverdue({ dueDate: "not-a-date" }, "2024-02-02");
    }).toThrow("Invalid date format");
});