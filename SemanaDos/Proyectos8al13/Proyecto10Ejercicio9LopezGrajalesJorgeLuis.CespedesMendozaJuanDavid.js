/*
Lenguaje utilizado: JavaScript
Versión: ECMAScript 6
Hora de elaboración: 21:45
Fecha de elaboración: 20 de junio de 2023
Elaborado por Ing(c) Jorge Luis López Grajales y Ing(c) Juan David Cespedez Mendoza
Universidad Tecnológica de Pereira
Carrera: Ingeniería de Sistemas y Computación
Dirigido al Doctor Ricardo Moreno Laverde

Programa: Serie de Bell
Descripción: Este programa genera la serie de Bell hasta el número de términos deseados ingresados por el usuario utilizando recursividad. La serie de Bell cuenta el número de particiones no vacías de un conjunto de n elementos. Comienza con los números 1, 1 y los siguientes términos se calculan como la suma de los términos anteriores multiplicados por los números naturales consecutivos. El programa muestra la serie de Bell en la consola.

Instrucciones:
- El programa solicitará al usuario ingresar el número de términos deseados en la serie de Bell.

Datos de entrada: Número de términos deseados en la serie de Bell.
Dato de salida: Serie de Bell.
*/

const preguntar = require('prompt-sync')({ sigint: true }); // Definición de la función prompt que ahora será llamada preguntar

// Función recursiva para calcular el coeficiente binomial
function calcularCoeficienteBinomial(n, k) {
  if (k === 0 || k === n) {
    return 1;
  }

  return calcularCoeficienteBinomial(n - 1, k - 1) + calcularCoeficienteBinomial(n - 1, k);
}

// Función recursiva para generar la serie de Bell
function generarSerieBell(n, serie) {
  if (n === 0) {
    return serie + "1";
  }

  const terminoAnterior = serie.split(" ")[serie.split(" ").length - 1];
  const terminoBell = calcularCoeficienteBinomial(n - 1, 0) * terminoAnterior;

  return generarSerieBell(n - 1, serie + " " + terminoBell);
}

// Obtener el número de términos deseados en la serie de Bell
var numeroTerminos = parseInt(preguntar("Ingrese el número de términos deseados en la serie de Bell:"));

// Generar la serie de Bell
var serieBell = generarSerieBell(numeroTerminos - 1, "1");

// Mostrar la serie de Bell
console.log("Serie de Bell: " + serieBell);
