# Jest Beginner Tests

A simple project demonstrating Jest testing with basic addition functions.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run tests:
   ```bash
   npm test
   ```

## Tests

The project includes tests for:

### Addition functionality:
- **Edge cases**: Tests addition with negative numbers (-1 + 1 = 0)
- **Zero handling**: Tests addition with zeros (0 + 0 = 0)  
- **Error handling**: Tests that invalid input throws an error

### Task completion functionality:
- **Complete task**: Tests task with done: true returns true
- **Incomplete task**: Tests task with done: false returns false
- **Missing property**: Tests task without done property returns false

### Task overdue functionality:
- **Overdue task**: Tests task with dueDate before today returns true
- **Future task**: Tests task with dueDate after today returns false
- **Today's task**: Tests task with dueDate equal to today returns false
- **Invalid date**: Tests invalid date format throws error

All tests are located in `tests/utils.test.js` and test functions from `src/utils.js`.