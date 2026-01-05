"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRandomCoordinates = exports.generateRandomCoordinate = void 0;
var _coordinates = require("./modules/coordinates.js");
var generateRandomCoordinate = exports.generateRandomCoordinate = function generateRandomCoordinate() {
  return {
    latitude: (0, _coordinates.generateRandomLatLong)(),
    longitude: (0, _coordinates.generateRandomLong)()
  };
};
var generateRandomCoordinates = exports.generateRandomCoordinates = function generateRandomCoordinates() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var arr = [];
  Array(len).fill(1).forEach(function (item, index) {
    arr.push(generateRandomCoordinate());
  });
  return arr;
};