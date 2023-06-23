/*
- Fecha de publicación: 30 de Julio de 2023
- Hora: 10.51am
- Versión de su código: 1
- Autores: Ing(c) Juan David Céspedes Mendoza, Ing(c) Jorge Luis López Grajales
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: 1
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
*/

console.log("Este programa presenta la suma de los elementos de la serie de Fibonacci entre 0 y 100.");
console.log("Los números a sumar son:");

let num1 = 0; // Primer término de la serie
let num2 = 1; // Segundo término de la serie
let acumulado = 0; // Variable para almacenar la suma de los términos

for (let i = num1; num2 < 100; i = num2) {
  console.log(i); // Imprime el término actual de la serie
  console.log(", "); // Imprime una coma y un espacio entre cada término

  acumulado += i; // Suma el término actual al acumulado

  num2 = num1 + num2; // Calcula el siguiente término de la serie
  num1 = i; // Actualiza el valor del primer término
}

console.log(" y su suma es: " + acumulado); // Imprime la suma de los términos
