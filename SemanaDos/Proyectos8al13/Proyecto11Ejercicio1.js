/*
v 1.0
Lenguaje utilizado: JavaScript
Versión: ECMAScript 6
Hora de elaboración: 15:30
Fecha de elaboración: 20 de junio de 2023
Elaborado por Ing. Jorge Luis López Grajales y Ing. Juan David Cespedez Mendoza
Universidad Tecnológica de Pereira
Carrera: Ingeniería de Sistemas y Computación
Dirigido al Doctor Ricardo Moreno Laverde

Programa: Serie de Fibonacci (Iterativo)
Descripción: Este programa genera la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000 utilizando bucles `for`. La serie de Fibonacci comienza con los dígitos 1 y 0, y va sumando progresivamente los dos últimos elementos de la serie. El programa muestra la serie de Fibonacci en la consola.

Instrucciones:
- No se requieren datos de entrada.

Dato de salida: Serie de Fibonacci.
*/

// Variables de la serie de Fibonacci
let num1 = 0; // Primer número de la serie
let num2 = 1; // Segundo número de la serie
let serie = "0 1 "; // Cadena que almacena la serie de Fibonacci

// Generar la serie de Fibonacci
for (let i = 2; num2 <= 10000; i++) {
  const temp = num1 + num2; // Calcula el siguiente número de la serie

  serie += temp + " "; // Agrega el número a la cadena de la serie

  num1 = num2; // Actualiza el primer número de la serie
  num2 = temp; // Actualiza el segundo número de la serie
}

// Mostrar la serie de Fibonacci
console.log("Serie de Fibonacci: " + serie);
