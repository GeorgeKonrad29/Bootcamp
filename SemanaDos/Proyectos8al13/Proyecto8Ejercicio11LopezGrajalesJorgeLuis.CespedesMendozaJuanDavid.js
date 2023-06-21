/*Version 1.0
Fecha de publicacion 20/06/2023
horas de ultima actualización 1439
Lenguaje utilizado JavaScript
Elaborado por:
Ing(c) Jorge Luis López Grajales
Ing(c) Juan David Cespedes Mendoza

Presentado a el Dr. Ricardo Moreno Laverde

Universidad Tecnologica de Pereira

Programa de Ingenieria en Sistemas y Computacion

El presente programa pregunta al usuario varias unidades de tiempo para convertirlas a milisegundos
*/
const preguntar= require('prompt-sync')({sigint: true})//La definicion de la funcion prompt que ahoras sera llamada preguntar

var horas,minutos,segundos; //Aqui se registraran las unidades de tiempo a convertir
var milisegundos; //Aqui se registrara el tiempo equivalente en milisegundos

//Aqui se registraran los datos necesarios

console.log("Bienvenido, yo soy un programa que convierte las horas, minutos y segundos en milisegundos")//Se presenta el programa
horas = preguntar("Digame por favor la cantidad de horas que desee: ")//Se preguntan las horas
minutos = preguntar("Ahora digame la cantidad de minutos: ")//se preguntan los minutos
segundos = preguntar("Y por ultimo los segundos")//Se preguntan los segundos

//Aqui se realizaran las operaciones necesarias de conversion de tiempo

milisegundos = (horas * 60 * 60 * 1000) + (minutos * 60 * 1000) + (segundos * 1000)
//Se muestran los resultados

console.log("Los milisegundos obtenidos de los tiempos dados son: " , milisegundos)