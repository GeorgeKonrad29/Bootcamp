/*Version 1.0
Fecha de publicacion 20/06/2023
horas de ultima actualización 1102
Lenguaje utilizado JavaScript
Elaborado por:
Ing(c) Jorge Luis López Grajales
Ing(c) Juan David Cespedes Mendoza

Presentado a el Dr. Ricardo Moreno Laverde

Universidad Tecnologica de Pereira

Programa de Ingenieria en Sistemas y Computacion

El presente programa pregunta al usuario una cantidad de horas y minutos y entrega la cantidad de minutos al que equivale
*/
const preguntar= require('prompt-sync')({sigint: true})//La definicion de la funcion prompt que ahora sera llamada preguntar

var horas,minutos;  //Estas variables son las horass y los minutos

var minutosTotales;  //Esta variable va a alojar el resultado de la operacion de conversion a minutos

//Estas acciones preguntan las horass y los minutos

horas = preguntar("Digame por favor la horas que desee convertir: ")

minutos= preguntar("Digame ahora la minutos que desee: ")

//Operacion de la conversion

minutosTotales = (horas * 60) + minutos

//Muestra los resultados

console.log("La cantidad de minutos que representan " + horas + " y " + minutos + " minutos es de: " + minutosTotales )