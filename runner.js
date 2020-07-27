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

  async run() {
    this.files.forEach(require);
    await Promise.all(this.tests.map(test => test.run()));
  }
}

module.exports = Runner;
