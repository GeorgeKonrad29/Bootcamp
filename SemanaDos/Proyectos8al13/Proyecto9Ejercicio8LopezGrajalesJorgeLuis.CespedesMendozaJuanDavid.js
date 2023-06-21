// Programa: Verificar si la multiplicación de dos números es igual a un tercer número
// Descripción: Este programa solicita al usuario ingresar tres números y determina si la multiplicación de los dos primeros números es igual al tercer número. Utiliza el lenguaje JavaScript y está desarrollado en la versión ECMAScript 6. Fue elaborado por Ing(c) Jorge Luis López Grajales y Ing(c) Juan David Cespedez Mendoza de la Universidad Tecnológica de Pereira, en el marco de la carrera de Ingeniería de Sistemas y Computación. Está dirigido al Doctor Ricardo Moreno Laverde.

const preguntar = require('prompt-sync')({ sigint: true });

//Aqui se define si la multiplicacio efectivamente da igual al tercero
function verificarMultiplicacion(num1, num2, resultado) {
  if (num1 * num2 === resultado) {
    return "La multiplicación de " + num1 + " y " + num2 + " es igual a " + resultado + ".";
  } else {
    return "La multiplicación de " + num1 + " y " + num2 + " no es igual a " + resultado + ".";
  }
}
//Pregunta por los numeros a utilizar
var num1 = parseFloat(preguntar("Ingresa el primer número:"));//estas dos lineas preguntan los dos primeros numeros
var num2 = parseFloat(preguntar("Ingresa el segundo número:"));
var resultado = parseFloat(preguntar("Ingresa el tercer número:"));//Esta linea pregunta el tercer numero que sera usado como comparacion
var verificacion = verificarMultiplicacion(num1, num2, resultado);
console.log(verificacion);

/*
Lenguaje utilizado: JavaScript
Versión: ECMAScript 6
Hora de elaboración: 16:00
Fecha de elaboración: 20/06/2023
Elaborado por Ing(c) Jorge Luis López Grajales y Ing(c) Juan David Cespedez Mendoza
Universidad Tecnológica de Pereira
Carrera: Ingeniería de Sistemas y Computación
Dirigido al Doctor Ricardo Moreno Laverde
*/