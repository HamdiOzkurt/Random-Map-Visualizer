const coordinates = require("./build/index.js");

const { generateRandomCoordinates, generateRandomCoordinate } = coordinates;
console.log(generateRandomCoordinate())
console.log(generateRandomCoordinates(10));