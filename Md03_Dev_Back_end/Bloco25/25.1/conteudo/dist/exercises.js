"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triangleCheck = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRetangleArea = exports.getSquareArea = void 0;
function getSquareArea(side) {
    return side ** 2;
}
exports.getSquareArea = getSquareArea;
function getRetangleArea(base, height) {
    return base * height;
}
exports.getRetangleArea = getRetangleArea;
function getTriangleArea(base, height) {
    return (base * height) / 2;
}
exports.getTriangleArea = getTriangleArea;
function getPolygonPerimeter(sides) {
    return sides.reduce((acc, curr) => acc += curr, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
function triangleCheck(sideA, sideB, sideC) {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
    const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
    const checkSideC = (sideB - sideA) < sideC && sideC < (sideB + sideA);
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
