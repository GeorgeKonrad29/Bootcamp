// Programa: Verificar si un estudiante aprobó el curso
// Descripción: Este programa solicita al usuario ingresar tres notas de un estudiante y determina si el estudiante aprueba el curso. Se considera que el estudiante aprueba si su promedio es mayor a 3.0. Utiliza el lenguaje JavaScript y está desarrollado en la versión ECMAScript 6. Fue elaborado por Ing(c) Jorge Luis López Grajales y Ing(c) Juan David Cespedez Mendoza de la Universidad Tecnológica de Pereira, en el marco de la carrera de Ingeniería de Sistemas y Computación. Está dirigido al Doctor Ricardo Moreno Laverde.

const preguntar = require('prompt-sync')({ sigint: true });
//Esta funcion Determina si el estudiante perdio o gano dependiendo de su promedio
function verificarAprobacion(nota1, nota2, nota3) {
  var promedio = (nota1 + nota2 + nota3) / 3;
  if (promedio >= 3.0) {
    return "El estudiante ha aprobado el curso con un promedio de " + promedio.toFixed(2) + ".";
  } else {
    return "El estudiante ha reprobado el curso con un promedio de " + promedio.toFixed(2) + ".";
  }
}

var nota1 = parseFloat(preguntar("Ingresa la primera nota:"));
var nota2 = parseFloat(preguntar("Ingresa la segunda nota:"));//estas tres lineas reciben las tres primeras notas
var nota3 = parseFloat(preguntar("Ingresa la tercera nota:"));
var resultado = verificarAprobacion(nota1, nota2, nota3);//esta variable va a alojar el resultado de si el estudiante gana o no
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