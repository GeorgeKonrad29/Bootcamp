/*
v 1.0
Lenguaje utilizado: JavaScript
Versión: ECMAScript 6
Hora de elaboración: 16:28
Fecha de elaboración: 20/06/2023
Elaborado por Ing. Jorge Luis López Grajales y Ing. Juan David Cespedez Mendoza
Universidad Tecnológica de Pereira
Carrera: Ingeniería de Sistemas y Computación
Dirigido al Doctor Ricardo Moreno Laverde

Programa: Serie de Lucas
Descripción: Este programa genera la serie de Lucas hasta el número de términos deseados ingresados por el usuario. La serie de Lucas comienza con los números 2 y 1, y los siguientes términos se calculan como la suma de los dos términos anteriores. El programa muestra la serie de Lucas en la consola.

Instrucciones:
- El programa solicitará al usuario ingresar el número de términos deseados en la serie de Lucas.

Datos de entrada: Número de términos deseados en la serie de Lucas.
Dato de salida: Serie de Lucas.
*/
const prompt = require('prompt-sync')({ sigint: true }); // Definición de la función prompt que ahora será llamada preguntar
// Función recursiva para generar la serie de Lucas
function generarSerieLucas(n, num1, num2, serie) {
    if (n <= 0) {
      return serie;
    }
  
    const temp = num1 + num2;
    serie += temp + " ";
  
    return generarSerieLucas(n - 1, num2, temp, serie);
  }
  
  // Obtener el número de términos deseados en la serie de Lucas
  var numeroTerminos = parseInt(prompt("Ingrese el número de términos deseados en la serie de Lucas:"));
  
  // Generar la serie de Lucas
  var serieLucas = generarSerieLucas(numeroTerminos, 2, 1, "2 1 ");
  
  // Mostrar la serie de Lucas
  console.log("Serie de Lucas: " + serieLucas);
  