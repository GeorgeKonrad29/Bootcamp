/*
Lenguaje utilizado: JavaScript
Versión: ECMAScript 6
Hora de elaboración: 20:30
Fecha de elaboración: 2023-06-20
Elaborado por Ing. Jorge Luis López Grajales y Ing. Juan David Cespedez Mendoza
Universidad Tecnológica de Pereira
Carrera: Ingeniería de Sistemas y Computación
Dirigido al Doctor Ricardo Moreno Laverde

Programa: Cálculo del Seno Hiperbólico
Descripción: Este programa calcula el valor del seno hiperbólico utilizando la serie de Taylor. El usuario debe ingresar el valor de x y el número de términos de la serie. El programa muestra el resultado del seno hiperbólico en la consola.

Instrucciones:
1. El programa solicitará al usuario ingresar el valor de x para calcular el seno hiperbólico.
2. El programa solicitará al usuario ingresar el número de términos de la serie.
3. El programa calculará el seno hiperbólico utilizando la serie de Taylor.
4. El programa mostrará el resultado del seno hiperbólico en la consola.

Datos de entrada: Valor de x, Número de términos de la serie.
Dato de salida: Seno hiperbólico.
*/

// Definición de la función factorial
function calcularFactorial(n) {
    if (n === 0) {
      return 1;
    } else {
      let factorial = 1;
      for (let i = 1; i <= n; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  
  // Función para calcular el seno hiperbólico utilizando la serie de Taylor
  function calcularSenoHiperbolico(x, terminos) {
    let senoHiperbolico = 0;
  
    // Cálculo de cada término de la serie
    for (let n = 0; n < terminos; n++) {
      const numerador = Math.pow(x, 2 * n + 1);
      const denominador = calcularFactorial(2 * n + 1);
      const termino = numerador / denominador;
      senoHiperbolico += termino;
    }
  
    return senoHiperbolico;
  }
  
  // Obtener el valor de x y el número de términos de la serie del usuario
  const prompt = require('prompt-sync')();
  const x = parseFloat(prompt("Ingrese el valor de x para calcular el seno hiperbólico:"));
  const terminos = parseInt(prompt("Ingrese el número de términos de la serie:"));
  
  // Calcular el seno hiperbólico
  const resultado = calcularSenoHiperbolico(x, terminos);
  
  // Mostrar el resultado
  console.log(`El seno hiperbólico de ${x} es: ${resultado}`);
  