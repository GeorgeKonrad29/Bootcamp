// Programa: Detectar si un número es par o impar
// Descripción: Este programa solicita al usuario ingresar un número y determina si es par o impar. Utiliza el lenguaje JavaScript y está desarrollado en la versión ECMAScript 6. Fue elaborado por Ing(c) Jorge Luis López Grajales y Ing(c) Juan David Cespedez Mendoza de la Universidad Tecnológica de Pereira, en el marco de la carrera de Ingeniería de Sistemas y Computación. Está dirigido al Doctor Ricardo Moreno Laverde.
const prompt= require('prompt-sync')({sigint: true})//La definicion de la funcion prompt que ahoras sera llamada preguntar
function esParOImpar(numero) {
  if (numero % 2 === 0) {
    return "El número es par.";
  } else {
    return "El número es impar.";
  }
}

var numero = parseInt(prompt("Ingresa un número:"));
var resultado = esParOImpar(numero);
console.log(resultado);

/*
Lenguaje utilizado: JavaScript
Versión: ECMAScript 6
Hora de elaboración: [hora actual en formato de 24 horas]
Fecha de elaboración: [fecha actual]
Elaborado por Ing(c) Jorge Luis López Grajales y Ing(c) Juan David Cespedez Mendoza
Universidad Tecnológica de Pereira
Carrera: Ingeniería de Sistemas y Computación
Dirigido al Doctor Ricardo Moreno Laverde
*/