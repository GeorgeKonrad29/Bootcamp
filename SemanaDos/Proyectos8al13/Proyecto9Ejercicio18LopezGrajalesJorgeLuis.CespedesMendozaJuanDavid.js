/*
v 1.0
Lenguaje utilizado: JavaScript
Versión: ECMAScript 6
Hora de elaboración: 18:10
Fecha de elaboración: 20 de junio de 2023
Elaborado por Ing(c) Jorge Luis López Grajales y Ing(c) Juan David Cespedez Mendoza
Universidad Tecnológica de Pereira
Carrera: Ingeniería de Sistemas y Computación
Dirigido al Doctor Ricardo Moreno Laverde

Programa: Cálculo de pago por estacionamiento
Descripción: Este programa calcula el monto que debe pagar un cliente por el estacionamiento de su vehículo en un estacionamiento. Se cobra $1,800 por hora o fracción. El programa recibe el tiempo de estacionamiento en horas y minutos, y calcula el monto total a pagar.

Instrucciones:
- Ingrese el tiempo de estacionamiento en horas.
- Ingrese el tiempo de estacionamiento en minutos.

Datos de entrada: TiempoEstacionamientoHoras, TiempoEstacionamientoMinutos.
Dato de salida: MontoTotalPagar.
*/

const preguntar = require('prompt-sync')({ sigint: true });

// Función para calcular el monto total a pagar por el estacionamiento
function calcularMontoEstacionamiento(tiempoEstacionamientoHoras, tiempoEstacionamientoMinutos) {
  const tiempoEstacionamientoTotalMinutos = tiempoEstacionamientoHoras * 60 + tiempoEstacionamientoMinutos;
  const horasCompletas = Math.ceil(tiempoEstacionamientoTotalMinutos / 60);
  const montoTotalPagar = horasCompletas * 1800;

  return montoTotalPagar;
}

// Solicitar los datos de entrada al usuario
var tiempoEstacionamientoHoras = parseInt(preguntar("Ingrese el tiempo de estacionamiento en horas:")); // Tiempo de estacionamiento en horas
var tiempoEstacionamientoMinutos = parseInt(preguntar("Ingrese el tiempo de estacionamiento en minutos:")); // Tiempo de estacionamiento en minutos

// Calcular el monto total a pagar por el estacionamiento
var montoTotalPagar = calcularMontoEstacionamiento(tiempoEstacionamientoHoras, tiempoEstacionamientoMinutos);

// Mostrar el monto total a pagar
console.log("Monto total a pagar: $" + montoTotalPagar);

