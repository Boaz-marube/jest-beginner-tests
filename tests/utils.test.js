const { add, notSum, isTaskComplete, isTaskOverdue, countCompleted, normalizeDate } = require('../src/utils'); 

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

test('empty array returns 0 completed tasks', () => {
    expect(countCompleted([])).toBe(0);
});

test('all complete tasks returns array length', () => {
    const tasks = [
        { title: "Task 1", done: true },
        { title: "Task 2", done: true }
    ];
    expect(countCompleted(tasks)).toBe(2);
});

test('mixed tasks returns correct count', () => {
    const tasks = [
        { title: "Task 1", done: true },
        { title: "Task 2", done: false },
        { title: "Task 3", done: true }
    ];
    expect(countCompleted(tasks)).toBe(2);
});

test('normalizeDate with valid ISO string', () => {
    expect(normalizeDate("2024-02-01T10:30:00Z")).toBe("2024-02-01");
});

test('normalizeDate with valid date string', () => {
    expect(normalizeDate("2024-02-01")).toBe("2024-02-01");
});

test('normalizeDate throws error for invalid input', () => {
    expect(() => {
        normalizeDate("not-a-date");
    }).toThrow("Invalid date format");
});