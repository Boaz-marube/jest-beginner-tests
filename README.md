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

The project includes tests for addition functionality:

- **Edge cases**: Tests addition with negative numbers (-1 + 1 = 0)
- **Zero handling**: Tests addition with zeros (0 + 0 = 0)  
- **Error handling**: Tests that invalid input throws an error

All tests are located in `tests/utils.test.js` and test functions from `src/utils.js`.