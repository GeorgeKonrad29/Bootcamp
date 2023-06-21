/*Version 1.0
Fecha de publicacion 20/06/2023
horas de ultima actualización 1012
Lenguaje utilizado JavaScript
Elaborado por:
Ing(c) Jorge Luis López Grajales
Ing(c) Juan David Cespedes Mendoza

Presentado a el Dr. Ricardo Moreno Laverde

Universidad Tecnologica de Pereira

Programa de Ingenieria en Sistemas y Computacion

El presente programa pregunta al usuario una temperatura en grados Celcius para devolver su equivalente en Grados Fahrenheit
*/

var gradoFahrenheit; //Grados fahrenheit
var gradoCelcius;    //Grados celcius
const preguntar= require('prompt-sync')({sigint: true})//La definicion de la funcion prompt que ahoras sera llamada preguntar
//Este segmento Pregunta la cantidad de grados Fahrenheit a convertir
gradoCelcius= preguntar("Digame una cantidad de grados Celcius: ");

//Conversion de grados

gradoFahrenheit= (9/5) * gradoCelcius + 32;

//Imprimimos en pantalla el resultado
console.log('La cantidad de grados fahrenheit obtenidos es de: ', gradoFahrenheit);
