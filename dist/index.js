"use strict";

var _until = _interopRequireDefault(require("./src/until1"));

var _until2 = require("./src/until2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("@babel/polyfill");

(0, _until2.f1)();
(0, _until2.f2)();
console.log([1, 2, 3].map(function (item) {
  return item + 1;
}));
