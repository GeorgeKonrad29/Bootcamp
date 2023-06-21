/*
v 1.0
Lenguaje utilizado: JavaScript
Versión: ECMAScript 6
Hora de elaboración: 18:30
Fecha de elaboración: 20 de junio de 2023
Elaborado por Ing. Jorge Luis López Grajales y Ing. Juan David Cespedez Mendoza
Universidad Tecnológica de Pereira
Carrera: Ingeniería de Sistemas y Computación
Dirigido al Doctor Ricardo Moreno Laverde

Programa: Cálculo de monto a pagar por alquiler de vehículo
Descripción: Este programa calcula el monto a pagar por el alquiler de un vehículo en una compañía de alquiler de automóviles. Se cobra un monto fijo de $400,000 para los primeros 300 km de recorrido. Para más de 300 km y hasta 1000 km, se cobra un monto adicional de $15,000 por cada kilómetro en exceso sobre 300. Para más de 1000 km, se cobra un monto adicional de $10,000 por cada kilómetro en exceso sobre 1000. Los precios ya incluyen el 20% del impuesto general a las ventas (IVA). El programa calcula el monto total a pagar y el monto incluido del impuesto.

Instrucciones:
- Ingrese la cantidad de kilómetros recorridos.

Datos de entrada: KilometrosRecorridos.
Datos de salida: MontoPagar, MontoIVA.
*/

const preguntar = require('prompt-sync')({ sigint: true });

// Función para calcular el monto a pagar y el monto incluido del impuesto
function calcularMontoAlquiler(kilometrosRecorridos) {
  let montoPagar = 0;
  let montoIVA = 0;

  if (kilometrosRecorridos <= 300) {
    montoPagar = 400000;
  } else if (kilometrosRecorridos > 300 && kilometrosRecorridos <= 1000) {
    const kmExceso = kilometrosRecorridos - 300;
    montoPagar = 400000 + kmExceso * 15000;
  } else {
    const kmExceso = kilometrosRecorridos - 1000;
    montoPagar = 400000 + 700000 + kmExceso * 10000;
  }

  montoIVA = montoPagar * 0.2;

  return {
    montoPagar,
    montoIVA,
  };
}

// Solicitar los datos de entrada al usuario
var kilometrosRecorridos = parseFloat(preguntar("Ingrese la cantidad de kilómetros recorridos:")); // Cantidad de kilómetros recorridos

// Calcular el monto a pagar y el monto incluido del impuesto
var resultado = calcularMontoAlquiler(kilometrosRecorridos);

// Mostrar los resultados
console.log("Monto a pagar por el alquiler del vehículo: $" + resultado.montoPagar.toFixed(2));
console.log("Monto incluido del impuesto (IVA): $" + resultado.montoIVA.toFixed(2));

