# Test Runner Task
Implement the test runner with simple API similar to Mocha or Jest. 

## Part 1: Walking skeleton
### 1.1. Invoke test runner
Enable to invoke the `index.js` file of the runner and provide files, e.g. 
```js
node index.js ./src.test.js
```
There might be several files, e.g.
```js
node index.js ./src1.test.js ./src2.test.js
```
### 1.2. Load and run src files
Load each file and run each `it` method of the test.

### 1.3. Print result of each test function

## Part 2: Assertion library
### 2.1 Expect and equal
Implement the basic assertion of `expect(<actual-value>).toEqual(<expected-value>)`;

## Part 3: Proper API
### 3.1. Implement support of async function
### 3.2. Support of `it.only` method

## Part 4: Test reporter
### 4.1. Show basic reporter of all tests
### 4.2. Color the report