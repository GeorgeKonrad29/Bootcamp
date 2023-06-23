/*
Lenguaje utilizado: JavaScript
Versión: ECMAScript 6
Fecha de elaboración: 2023-06-20
Elaborado por Ing(c) Jorge Luis López Grajales y Ing(c) Juan David Cespedez Mendoza
Universidad Tecnológica de Pereira
Carrera: Ingeniería de Sistemas y Computación
Dirigido al Doctor Ricardo Moreno Laverde

Programa: Cálculo de e^x utilizando la serie de Taylor
Descripción: Este programa lee el valor de x y el número de términos de la serie de Taylor, y calcula el valor de e^x utilizando la serie. El programa muestra el resultado en la consola.

Instrucciones:
- El programa solicitará al usuario ingresar el valor de x.
- Luego, solicitará al usuario ingresar el número de términos de la serie de Taylor.

Datos de entrada: 
- x: Valor numérico
- Número de términos de la serie de Taylor: Entero positivo

Dato de salida: Valor de e^x calculado con la serie de Taylor.
*/
const prompt= require('prompt-sync')({sigint: true})
// Función para calcular el factorial de un número
function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Función para calcular el valor de e^x utilizando la serie de Taylor
  function calcularEx(x, terminos) {
    let resultado = 0;
    for (let n = 0; n < terminos; n++) {
      const termino = (x ** n) / factorial(n);
      resultado += termino;
    }
    return resultado;
  }
  
  // Obtener el valor de x y el número de términos de la serie
  const x = parseFloat(prompt("Ingrese el valor de x: "));
  const terminos = parseInt(prompt("Ingrese el número de términos de la serie de Taylor: "));
  
  // Calcular e^x utilizando la serie de Taylor
  const resultado = calcularEx(x, terminos);
  
  // Mostrar el resultado
  console.log(`El valor de e^${x} calculado con la serie de Taylor es: ${resultado}`);
  