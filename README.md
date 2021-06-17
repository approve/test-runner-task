# Test Runner Task
Implement the test runner with simple API similar to Mocha or Jest. 

### Part 1: Walking skeleton
1. Invoke test runner

Enable to invoke the `index.js` file of the runner and provide files, e.g. 
```js
node index.js ./src.test.js
```
There might be several files, e.g.
```js
node index.js ./src1.test.js ./src2.test.js
```
2. Load and run src files

Load each file and run each `it` method of the test.

3. Print result of each test function
```bash
node index.js ./src.test.js

V passed: <name-of-passed-test>
X failed: <name-of-failed-test>
```

### Part 2: Rich API
1. Support of `it.only` method
2. Implement support of async function

### Part 3: Support suite
1. Implement `describe()`
1. Implement `beforeEach()` and `afterEach()`

### Part 4: Test reporter
1. Show basic reporter of all tests
2. Color the report

### Advanced
1. How to run several tests in parallel?
2. How to support transpilation? Babel/TS?
