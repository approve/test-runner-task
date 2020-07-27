const Test = require('./test');

class Runner {
  constructor() {
    this.files = [];
    this.tests = [];
    this.onlyTests = [];

    global.it = (name, callback) => {
      this.tests.push(
        new Test(name, callback)
      );
    }

    global.it.only = (name, callback) => {
      this.onlyTests.push(
        new Test(name, callback)
      );
    }

  }

  addFile(filePath) {
    this.files.push(filePath)
  }

  async run() {
    this.files.forEach(require);
    if (this.onlyTests.length) {
      await Promise.all(this.onlyTests.map(test => test.run()));
    } else {
      await Promise.all(this.tests.map(test => test.run()));
    }
  }
}

module.exports = Runner;
