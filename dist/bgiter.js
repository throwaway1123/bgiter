(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BGIter = function () {
  function BGIter() {
    var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
    var iterations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    _classCallCheck(this, BGIter);

    this.interval = interval;
    this.iterations = iterations;
    this.usedColors = {};
    this.count = 0;
    this.timeout;
  }

  _createClass(BGIter, [{
    key: "run",
    value: function run() {
      this.timer();
    }
  }, {
    key: "bgColor",
    value: function bgColor() {
      var color = void 0;
      do {
        color = BGIter.genColor();
      } while (color in this.usedColors);
      this.usedColors[color] = true;
      this.count++;
      return color;
    }
  }, {
    key: "timer",
    value: function timer() {
      var _this = this;

      var color = this.bgColor();
      BGIter.setBg(color);
      if (this.count >= this.iterations) return;else setTimeout(function () {
        return _this.timer(_this.interval, _this.iterations);
      }, this.interval);
    }
  }], [{
    key: "setBg",
    value: function setBg(color) {
      document.body.style.backgroundColor = color;
    }
  }, {
    key: "genColor",
    value: function genColor() {
      var red = Math.random() * 255 >> 0;
      var green = Math.random() * 255 >> 0;
      var blue = Math.random() * 255 >> 0;
      return "rgb(" + red + "," + green + "," + blue + ")";
    }
  }]);

  return BGIter;
}();

exports.default = BGIter;

},{}],2:[function(require,module,exports){
'use strict';

var _BGIter = require('./BGIter');

var _BGIter2 = _interopRequireDefault(_BGIter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bgiter = new _BGIter2.default();
bgiter.run();

},{"./BGIter":1}]},{},[2]);
