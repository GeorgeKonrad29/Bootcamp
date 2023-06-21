// Programa: Verificar si un número es mayor a 100
// Descripción: Este programa solicita al usuario ingresar un número y determina si es mayor a 100. Utiliza el lenguaje JavaScript y está desarrollado en la versión ECMAScript 6. Fue elaborado por Ing(c) Jorge Luis López Grajales y Ing(c) Juan David Cespedez Mendoza de la Universidad Tecnológica de Pereira, en el marco de la carrera de Ingeniería de Sistemas y Computación. Está dirigido al Doctor Ricardo Moreno Laverde.

const preguntar = require('prompt-sync')({ sigint: true });

function esMayorACien(numero) {
  if (numero > 100) {
    return "El número es mayor a 100.";
  } else {
    return "El número no es mayor a 100.";
  }
}

var numero = parseInt(preguntar("Ingresa un número:"));
var resultado = esMayorACien(numero);
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