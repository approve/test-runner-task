class Test {
  constructor(name, callback) {
    this.name = name;
    this.callback = callback;
  }
  async run() {
    try {
      await this.callback();
      console.log(`V passed: ${this.name}`);
    } catch (error) {
      console.log(`X failed: ${this.name}`);
    }
    return true;
  }
}

module.exports = Test;