/*Version 1.0
Fecha de publicacion 20/06/2023
horas de ultima actualización 1037
Lenguaje utilizado JavaScript
Elaborado por:
Ing(c) Jorge Luis López Grajales
Ing(c) Juan David Cespedes Mendoza

Presentado a el Dr. Ricardo Moreno Laverde

Universidad Tecnologica de Pereira

Programa de Ingenieria en Sistemas y Computacion

El presente programa pregunta al usuario una base y una altura de un rectangulo para calcular su perimetro
*/
const preguntar= require('prompt-sync')({sigint: true})//La definicion de la funcion prompt que ahora sera llamada preguntar

var base,altura;  //Estas variables representan los lados del rectangulo

var perimetro;  //Esta variable va a alojar el resultado de la operacion del perimetro

//Estas acciones preguntan los lados del rectangulo

base = preguntar("Digame por favor la base del rectangulo: ")

altura= preguntar("Digame ahora la altura del rectangulo: ")

//Operacion del perimetro

perimetro = (base * 2) + (altura * 2)

//Muestra los resultados

console.log("El perimetro del rectangulo de base " + base + " y de altura " + altura + " es de: " + perimetro )