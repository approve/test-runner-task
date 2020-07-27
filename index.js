const Runner = require('./runner');

const runner = new Runner();

const testFiles = process.argv.slice(2);

testFiles.forEach(file => runner.addFile(file));

runner.run();
