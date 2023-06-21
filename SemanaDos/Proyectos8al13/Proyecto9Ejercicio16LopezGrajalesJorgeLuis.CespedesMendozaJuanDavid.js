/*
Lenguaje utilizado: JavaScript
Versión: ECMAScript 6
Hora de elaboración: 15:30
Fecha de elaboración: 20 de junio de 2023
Elaborado por Ing(c) Jorge Luis López Grajales y Ing(c) Juan David Cespedez Mendoza
Universidad Tecnológica de Pereira
Carrera: Ingeniería de Sistemas y Computación
Dirigido al Doctor Ricardo Moreno Laverde

Programa: Cálculo de pago a un fabricante de refacciones
Descripción: Este programa ayuda a una empresa a determinar cómo pagar al fabricante de refacciones, dependiendo del monto total de la compra. Si el monto total excede de $500,000, la empresa invertirá un 55% de su propio dinero, pedirá prestado al banco un 30% y el resto lo pagará solicitando un crédito al fabricante. Si el monto total no excede de $500,000, la empresa invertirá un 70% de su propio dinero y el 30% restante lo pagará solicitando crédito al fabricante. El fabricante cobrará un 20% de interés sobre la cantidad pagada a crédito.

Instrucciones:
- Ingrese el costo de cada pieza.
- Ingrese el número de piezas a comprar.

Datos de entrada: CostoPieza, NumeroDePiezas.
Datos de salida: CantidadInvertida, ValorPrestamoBanco, ValorCreditoFabricante, InteresCobradoPorFabricante.
*/

const preguntar = require('prompt-sync')({ sigint: true });

// Función para calcular el pago al fabricante
function calcularPagoFabricante(costoPieza, numeroDePiezas) {
  const montoTotal = costoPieza * numeroDePiezas;
  let cantidadInvertida = 0;
  let valorPrestamoBanco = 0;
  let valorCreditoFabricante = 0;

  if (montoTotal > 500000) {
    cantidadInvertida = montoTotal * 0.55; // 55% de la cantidad total invertida por la empresa
    valorPrestamoBanco = montoTotal * 0.3; // 30% del monto total prestado por el banco
    valorCreditoFabricante = montoTotal - cantidadInvertida - valorPrestamoBanco; // Resto pagado solicitando crédito al fabricante
  } else {
    cantidadInvertida = montoTotal * 0.7; // 70% de la cantidad total invertida por la empresa
    valorCreditoFabricante = montoTotal - cantidadInvertida; // Resto pagado solicitando crédito al fabricante
  }

  const interesCobradoPorFabricante = valorCreditoFabricante * 0.2; // 20% de interés cobrado por el fabricante

  return {
    cantidadInvertida,
    valorPrestamoBanco,
    valorCreditoFabricante,
    interesCobradoPorFabricante,
  };
}

// Solicitar los datos de entrada al usuario
var costoPieza = parseFloat(preguntar("Ingrese el costo de cada pieza:")); // Costo de cada pieza
var numeroDePiezas = parseInt(preguntar("Ingrese el número de piezas a comprar:")); // Número de piezas a comprar

// Calcular el pago al fabricante
var resultado = calcularPagoFabricante(costoPieza, numeroDePiezas);

// Mostrar los resultados
console.log("Cantidad invertida por la empresa: $" + resultado.cantidadInvertida.toFixed(2));
console.log("Valor del préstamo del banco: $" + resultado.valorPrestamoBanco.toFixed(2));
console.log("Valor del crédito al fabricante: $" + resultado.valorCreditoFabricante.toFixed(2));
console.log("Interés cobrado por el fabricante: $" + resultado.interesCobradoPorFabricante.toFixed(2));

