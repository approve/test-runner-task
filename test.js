class Test {
  constructor(name, callback) {
    this.name = name;
    this.callback = callback;
  }
  run() {
    try {
      this.callback();
      console.log(`V passed: ${this.name}`);
    } catch (error) {
      console.log(`X failed: ${this.name}`);
    }
  }
}

module.exports = Test;