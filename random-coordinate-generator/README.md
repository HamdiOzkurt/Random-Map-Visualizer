# Random Coordinate Generator

A simple and lightweight Node.js library to generate random geographic coordinates (latitude and longitude).

## Installation

You can install the package via npm:

```bash
npm install @hamdi_ozkurt/random-coordinate-generator
```

## Usage

Import the functions in your project:

```javascript
const { generateRandomCoordinate, generateRandomCoordinates } = require('@hamdi_ozkurt/random-coordinate-generator');

// OR using ES6 import
// import { generateRandomCoordinate, generateRandomCoordinates } from '@hamdi_ozkurt/random-coordinate-generator';
```

### Generate a Single Coordinate

Returns an object with random `latitude` and `longitude`.

```javascript
const coordinate = generateRandomCoordinate();
console.log(coordinate);
// Output example: { latitude: 45.123, longitude: -120.456 }
```

### Generate Multiple Coordinates

Returns an array of coordinate objects. You can specify the number of coordinates to generate (default is 1).

```javascript
const coordinates = generateRandomCoordinates(5);
console.log(coordinates);
/* Output example:
[
  { latitude: 12.345, longitude: 98.765 },
  { latitude: -34.567, longitude: -12.345 },
  ...
]
*/
```

## Features

- Generates valid latitudes (-90 to 90) and longitudes (-180 to 180).
- Returns coordinates with 3 decimal places precision.
- Lightweight with zero dependencies.

## License

ISC
