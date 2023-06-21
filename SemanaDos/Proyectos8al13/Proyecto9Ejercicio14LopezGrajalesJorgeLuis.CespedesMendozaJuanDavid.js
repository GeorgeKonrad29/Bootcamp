// Programa: Calcular el precio con descuento de un artículo
// Descripción: Este programa solicita al usuario ingresar la clave y el precio original de un artículo, y calcula el precio con descuento basado en la clave. Si la clave es 1, se aplica un descuento del 10%. Si la clave es 2, se aplica un descuento del 20%. Utiliza el lenguaje JavaScript y está desarrollado en la versión ECMAScript 6. Fue elaborado por Ing(c) Jorge Luis López Grajales y Ing(c) Juan David Cespedez Mendoza de la Universidad Tecnológica de Pereira, en el marco de la carrera de Ingeniería de Sistemas y Computación. Está dirigido al Doctor Ricardo Moreno Laverde.

const preguntar = require('prompt-sync')({ sigint: true });

// Función para calcular el precio con descuento
function calcularPrecioConDescuento(clave, precioOriginal) {
  let descuento = 0;

  if (clave === 1) {
    descuento = 0.1; // 10% de descuento
  } else if (clave === 2) {
    descuento = 0.2; // 20% de descuento
  }

  const precioConDescuento = precioOriginal - (precioOriginal * descuento);
  return "Clave: " + clave + "\nPrecio original: $" + precioOriginal.toFixed(2) + "\nPrecio con descuento: $" + precioConDescuento.toFixed(2);
}

// Solicitar la clave y el precio original al usuario
var clave = parseInt(preguntar("Ingresa la clave del artículo (1 o 2):")); // Clave del artículo (1 o 2)
var precioOriginal = parseFloat(preguntar("Ingresa el precio original del artículo:")); // Precio original del artículo

// Calcular el precio con descuento
var resultado = calcularPrecioConDescuento(clave, precioOriginal);

// Mostrar el resultado en la consola
console.log(resultado);

/*
v 1.0
Lenguaje utilizado: JavaScript
Versión: ECMAScript 6
Hora de elaboración: 17:00
Fecha de elaboración: 20/06/2023
Elaborado por Ing(c) Jorge Luis López Grajales y Ing(c) Juan David Cespedez Mendoza
Universidad Tecnológica de Pereira
Carrera: Ingeniería de Sistemas y Computación
Dirigido al Doctor Ricardo Moreno Laverde
*/