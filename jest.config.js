require("@babel/polyfill");
require("@babel/preset-env");
require("@babel/preset-react");

module.exports = {
  collectCoverageFrom: ["src/**/*.js"],
  testRegex: "./*\\.test\\.js$",
  snapshotSerializers: ["jest-emotion"],
};
