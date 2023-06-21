/*
Lenguaje utilizado: JavaScript
Versión: ECMAScript 6
Hora de elaboración: [hora actual en formato de 24 horas]
Fecha de elaboración: [fecha actual]
Elaborado por Ing. Jorge Luis López Grajales y Ing. Juan David Cespedez Mendoza
Universidad Tecnológica de Pereira
Carrera: Ingeniería de Sistemas y Computación
Dirigido al Doctor Ricardo Moreno Laverde

Programa: Serie de Perrin
Descripción: Este programa genera la serie de Perrin hasta el número de términos deseados ingresados por el usuario. La serie de Perrin comienza con los números 3, 0 y 2, y los siguientes términos se calculan como la suma del término anterior y el tercer término anterior. El programa muestra la serie de Perrin en la consola.

Instrucciones:
- El programa solicitará al usuario ingresar el número de términos deseados en la serie de Perrin.

Datos de entrada: Número de términos deseados en la serie de Perrin.
Dato de salida: Serie de Perrin.
*/

const preguntar = require('prompt-sync')({ sigint: true }); // Definición de la función prompt que ahora será llamada preguntar

// Función recursiva para generar la serie de Perrin
function generarSeriePerrin(n, num1, num2, num3, serie) {
  if (n <= 0) {
    return serie;
  }

  const temp = num1 + num3;
  serie += temp + " ";

  return generarSeriePerrin(n - 1, num2, num3, temp, serie);
}

// Obtener el número de términos deseados en la serie de Perrin
var numeroTerminos = parseInt(preguntar("Ingrese el número de términos deseados en la serie de Perrin:"));

// Generar la serie de Perrin
var seriePerrin = generarSeriePerrin(numeroTerminos, 3, 0, 2, "3 0 2 ");

// Mostrar la serie de Perrin
console.log("Serie de Perrin: " + seriePerrin);

