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

El presente programa pregunta al usuario sus nombres y apellidos y los escribe juntos
*/
const preguntar= require('prompt-sync')({sigint: true})//La definicion de la funcion prompt que ahora sera llamada preguntar

var nombres; //Aqui se registraran los nombres
var apellidos; //Aqui se registraran los apellidos
var nacimiento; //Aqui se registrara la fecha de nacimiento

var nombreCompleto; //Aqui se registrara el nombre completo con su fecha de nacimiento
//Aqui se preguntaran los datos al usuario

console.log("Bienvenido, yo soy un programa que recibira su nombre completo y su fecja de nacimiento y los combinara")
nombres= preguntar("Digame por favor su/s nombre/s: ")
apellidos=preguntar("Ahora digame sus apellidos por favor: ")
nacimiento=preguntar("Ahora por ultimo digame en que año nacio: ")


//Aqui se va a imprimir los datos combinados

console.log(nombres + " " + apellidos + " " + nacimiento)


