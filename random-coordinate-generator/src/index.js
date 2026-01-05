import {
    generateRandomLong,
    generateRandomLatLong
} from "./modules/coordinates.js";

export const generateRandomCoordinate = () => {
    return {
        latitude: generateRandomLatLong(),
        longitude: generateRandomLong(),
    }
}

export const generateRandomCoordinates = (len = 1) => {
    const arr = [];
    Array(len).fill(1).forEach((item, index) => {
        arr.push(generateRandomCoordinate());
    });
    return arr;
}