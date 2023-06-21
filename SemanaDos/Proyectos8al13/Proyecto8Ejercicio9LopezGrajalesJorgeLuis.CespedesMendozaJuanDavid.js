/*Version 1.0
Fecha de publicacion 20/06/2023
horas de ultima actualización 1415
Lenguaje utilizado JavaScript
Elaborado por:
Ing(c) Jorge Luis López Grajales
Ing(c) Juan David Cespedes Mendoza

Presentado a el Dr. Ricardo Moreno Laverde

Universidad Tecnologica de Pereira

Programa de Ingenieria en Sistemas y Computacion

El presente programa pregunta al dos angulos de un triangulo y devolvera el angulo restante

Salvedad: para valores en los cuales la suma de ambos sea mayor o igual a 180 no se garantizan resultados
*/
const preguntar= require('prompt-sync')({sigint: true})//La definicion de la funcion prompt que ahora sera llamada preguntar

var angulo1; //Aqui se registrara el primer angulo
var angulo2; //Aqui se registrara el segundo angulo
var anguloFaltante; //Aqui se registrara el angulo que falta

//Aqui se preguntaran los dos angulos necesarios
console.log("Bienvenido, yo soy un programa que calcula el angulo que falta para generar un triangulo")
angulo1 = preguntar("Digame por favor el primer angulo de su triangulo: ")
angulo2 = preguntar("Ahora digame el segundo angulo: ")

//Aqui se haran las operaciones necesarias para el resultado

anguloFaltante = 180 - angulo1 - angulo2

console.log ("El valor del tercer angulo del triangulo con angulos de " + angulo1 + " y " + angulo2 + " es " + anguloFaltante )