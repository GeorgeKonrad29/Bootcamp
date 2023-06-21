/*
Lenguaje utilizado: JavaScript
Versión: ECMAScript 6
Hora de elaboración: 15:30
Fecha de elaboración: 20 de junio de 2023
Elaborado por Ing. Jorge Luis López Grajales y Ing. Juan David Cespedez Mendoza
Universidad Tecnológica de Pereira
Carrera: Ingeniería de Sistemas y Computación
Dirigido al Doctor Ricardo Moreno Laverde

Programa: Serie de Fibonacci (Recursivo)
Descripción: Este programa genera la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000 utilizando recursividad. La serie de Fibonacci comienza con los dígitos 1 y 0, y va sumando progresivamente los dos últimos elementos de la serie. El programa muestra la serie de Fibonacci en la consola.

Instrucciones:
- No se requieren datos de entrada.

Dato de salida: Serie de Fibonacci.
*/

// Función recursiva para generar la serie de Fibonacci
function generarSerieFibonacci(n, num1, num2, serie) {
  if (n <= 0) {
    return serie;
  }

  const temp = num1 + num2;
  serie += temp + " ";

  return generarSerieFibonacci(n - 1, num2, temp, serie);
}

// Generar la serie de Fibonacci
var serieFibonacci = generarSerieFibonacci(10, 0, 1, "0 1 ");

// Mostrar la serie de Fibonacci
console.log("Serie de Fibonacci: " + serieFibonacci);

  
  