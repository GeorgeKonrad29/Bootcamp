// Programa: Calcular el salario semanal de un obrero
// Descripción: Este programa solicita al usuario ingresar el número de horas trabajadas por un obrero y calcula su salario semanal. Si trabaja 40 horas o menos, se le paga $16 por hora. Si trabaja más de 40 horas, se le paga $16 por cada una de las primeras 40 horas y $20 por cada hora extra. Utiliza el lenguaje JavaScript y está desarrollado en la versión ECMAScript 6. Fue elaborado por Ing(c) Jorge Luis López Grajales y Ing(c) Juan David Cespedez Mendoza de la Universidad Tecnológica de Pereira, en el marco de la carrera de Ingeniería de Sistemas y Computación. Está dirigido al Doctor Ricardo Moreno Laverde.

const preguntar = require('prompt-sync')({ sigint: true });
//Esta funcion recoge los valores y calcula el salario del trabajador
function calcularSalarioSemanal(horasTrabajadas) {
  const tarifaNormal = 16;
  const tarifaExtra = 20;
  const horasNormales = 40;
  let salario = 0;
//determina si el trabajador tiene horas extra
  if (horasTrabajadas <= horasNormales) {
    salario = horasTrabajadas * tarifaNormal;
  } else {
    const horasExtras = horasTrabajadas - horasNormales;
    salario = (horasNormales * tarifaNormal) + (horasExtras * tarifaExtra);
  }

  return "El salario semanal del obrero es $" + salario.toFixed(2) + ".";
}

var horasTrabajadas = parseFloat(preguntar("Ingresa el número de horas trabajadas:"));
var resultado = calcularSalarioSemanal(horasTrabajadas);
console.log(resultado);

/*
v 1.0
Lenguaje utilizado: JavaScript
Versión: ECMAScript 6
Hora de elaboración: 16:50
Fecha de elaboración: 20/06/2023
Elaborado por Ing(c) Jorge Luis López Grajales y Ing(c) Juan David Cespedez Mendoza
Universidad Tecnológica de Pereira
Carrera: Ingeniería de Sistemas y Computación
Dirigido al Doctor Ricardo Moreno Laverde
*/