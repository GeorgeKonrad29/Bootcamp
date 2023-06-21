/*
v 1.0
Lenguaje utilizado: JavaScript
Versión: ECMAScript 6
Hora de elaboración: 20:50
Fecha de elaboración: 20 de junio de 2023
Elaborado por Ing(c) Jorge Luis López Grajales y Ing(c) Juan David Cespedez Mendoza
Universidad Tecnológica de Pereira
Carrera: Ingeniería de Sistemas y Computación
Dirigido al Doctor Ricardo Moreno Laverde

Programa: Serie de Narayana
Descripción: Este programa genera la serie de Narayana hasta el número de términos deseados ingresados por el usuario. La serie de Narayana comienza con los números 1, 1 y 1, y los siguientes términos se calculan como la suma del término anterior y el número de parejas de términos consecutivos anteriores que son diferentes. El programa muestra la serie de Narayana en la consola.

Instrucciones:
- El programa solicitará al usuario ingresar el número de términos deseados en la serie de Narayana.

Datos de entrada: Número de términos deseados en la serie de Narayana.
Dato de salida: Serie de Narayana.
*/

const preguntar = require('prompt-sync')({ sigint: true }); // Definición de la función prompt que ahora será llamada preguntar

// Función recursiva para generar la serie de Narayana
function generarSerieNarayana(n, num1, num2, num3, serie) {
  if (n <= 0) {
    return serie;
  }

  const temp = num1 + num3;
  serie += temp + " ";

  return generarSerieNarayana(n - 1, num2, num3, temp, serie);
}

// Obtener el número de términos deseados en la serie de Narayana
var numeroTerminos = parseInt(preguntar("Ingrese el número de términos deseados en la serie de Narayana:"));

// Generar la serie de Narayana
var serieNarayana = generarSerieNarayana(numeroTerminos, 1, 1, 1, "1 1 1 ");

// Mostrar la serie de Narayana
console.log("Serie de Narayana: " + serieNarayana);
