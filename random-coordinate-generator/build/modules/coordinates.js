"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRandomLong = exports.generateRandomLatLong = void 0;
var generateRandomLong = exports.generateRandomLong = function generateRandomLong() {
  var num = parseFloat((Math.random() * 180).toFixed(3));
  var posorneg = Math.random();
  if (posorneg >= 0.5) {
    num = num * -1;
  }
  return num;
};
var generateRandomLatLong = exports.generateRandomLatLong = function generateRandomLatLong() {
  var num = parseFloat((Math.random() * 90).toFixed(3));
  var posorneg = Math.random();
  if (posorneg >= 0.5) {
    num = num * -1;
  }
  return num;
};