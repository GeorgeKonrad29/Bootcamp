/*
Lenguaje utilizado: JavaScript
Versión: ECMAScript 6
Hora de elaboración: 21:00
Fecha de elaboración: 2023-06-20
Elaborado por Ing. Jorge Luis López Grajales y Ing. Juan David Cespedez Mendoza
Universidad Tecnológica de Pereira
Carrera: Ingeniería de Sistemas y Computación
Dirigido al Doctor Ricardo Moreno Laverde

Programa: Operaciones Aritméticas
Descripción: Este programa solicita al usuario ingresar dos números y realiza las operaciones de suma, resta, multiplicación y división entre ellos. Luego, muestra los resultados de forma ordenada en la consola.

Instrucciones:
1. El programa solicitará al usuario ingresar el primer número.
2. El programa solicitará al usuario ingresar el segundo número.
3. El programa realizará las operaciones aritméticas: suma, resta, multiplicación y división.
4. El programa mostrará los resultados en la consola, ordenados.

Datos de entrada: Dos números.
Dato de salida: Resultados de las operaciones aritméticas.
*/

// Obtener los dos números del usuario
const prompt = require('prompt-sync')();
const numero1 = parseFloat(prompt("Ingrese el primer número: "));
const numero2 = parseFloat(prompt("Ingrese el segundo número: "));

// Realizar las operaciones aritméticas
const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;

// Mostrar los resultados en pantalla de forma ordenada
console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicación: ${multiplicacion}`);
console.log(`División: ${division}`);
