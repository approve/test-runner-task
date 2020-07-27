const Test = require('./test');

class Runner {
  constructor() {
    this.files = [];
    this.tests = [];

    global.it = (name, callback) => {
      this.tests.push(
        new Test(name, callback)
      );
    }

  }

  addFile(filePath) {
    this.files.push(filePath)
  }

  run() {
    this.files.forEach(require);
    this.tests.forEach(test => test.run());
  }
}

module.exports = Runner;
