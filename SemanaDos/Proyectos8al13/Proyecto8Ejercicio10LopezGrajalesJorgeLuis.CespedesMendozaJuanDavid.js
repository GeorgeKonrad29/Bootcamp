/*
Lenguaje utilizado: JavaScript
Versión: ECMAScript 6
Hora de elaboración: 21:15
Fecha de elaboración: 2023-06-20
Elaborado por Ing. Jorge Luis López Grajales y Ing. Juan David Cespedez Mendoza
Universidad Tecnológica de Pereira
Carrera: Ingeniería de Sistemas y Computación
Dirigido al Doctor Ricardo Moreno Laverde

Programa: Conversión de mph a m/s
Descripción: Este programa solicita al usuario ingresar una velocidad en millas por hora (mph) y realiza la conversión a metros por segundo (m/s). Luego, muestra el resultado en la consola.

Instrucciones:
1. El programa solicitará al usuario ingresar una velocidad en millas por hora (mph).
2. El programa realizará la conversión a metros por segundo (m/s).
3. El programa mostrará el resultado en la consola.

Datos de entrada: Velocidad en millas por hora (mph).
Dato de salida: Velocidad en metros por segundo (m/s).
*/

// Obtener la velocidad en millas por hora (mph) del usuario
const prompt = require('prompt-sync')();
const mph = parseFloat(prompt("Ingrese la velocidad en millas por hora (mph): "));

// Realizar la conversión a metros por segundo (m/s)
const metrosPorSegundo = mph * 1609.344 / 3600;

// Mostrar el resultado en pantalla
console.log(`La velocidad en metros por segundo (m/s) es: ${metrosPorSegundo}`);
