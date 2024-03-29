import * as Ex from './exercises';

console.log("A AREA DE UM:");

console.log(`- Quadrado de lado 10cm: ${Ex.getSquareArea(10)}cm²`);
console.log(`- Quadrado de lado 5cm: ${Ex.getSquareArea(5)}cm²`);
console.log(`- Quadrado de lado 100cm: ${Ex.getSquareArea(100)}cm²`);

console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getRetangleArea(10, 25)}cm²`);
console.log(`- Retângulo de base 5cm e altura 30cm: ${Ex.getRetangleArea(5, 30)}cm²`);
console.log(`- Retângulo de base 100cm e altura 200cm: ${Ex.getRetangleArea(100, 200)}cm²`);

console.log(`- Triângulo de base 10cm e altura 25cm ${Ex.getTriangleArea(10,25)}cm²`);
console.log(`- Triângulo de base 5cm e altura 30cm ${Ex.getTriangleArea(5,30)}cm²`);
console.log(`- Triângulo de base 100cm e altura 200cm ${Ex.getTriangleArea(100,200)}cm²`);

console.log("\nO PERIMETRO DE UM:");

console.log(`- Quadrado de lado 10cm: ${Ex.getPolygonPerimeter([10, 10, 10, 10])}cm`);
console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getPolygonPerimeter([10, 25, 10, 25])}cm`);
console.log(`- Triângulo cujos lados tem 10cm cada: ${Ex.getPolygonPerimeter([10, 10, 10])}cm`);

console.log("\nVERIFICA A EXISTÊNCIA DE TRIÂNGULOS CUJOS LADOS TÊM:");

console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(10, 5, 3)}`);
console.log(`- 10cm, 5cm e 8cm: ${Ex.triangleCheck(10, 5, 8)}`);
console.log(`- 30cm, 30cm e 30cm: ${Ex.triangleCheck(30, 30, 30)}`);