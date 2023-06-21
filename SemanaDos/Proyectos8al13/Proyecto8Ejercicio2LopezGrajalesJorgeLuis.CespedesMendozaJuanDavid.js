/*Version 1.0
Fecha de publicacion 20/06/2023
horas de ultima actualización 1024
Lenguaje utilizado JavaScript
Elaborado por:
Ing(c) Jorge Luis López Grajales
Ing(c) Juan David Cespedes Mendoza

Presentado a el Dr. Ricardo Moreno Laverde

Universidad Tecnologica de Pereira

Programa de Ingenieria en Sistemas y Computacion

El presente programa pregunta al usuario un radio de una esfera para calcular su respectivo volumen
*/




const preguntar= require('prompt-sync')({sigint: true})//La definicion de la funcion prompt que ahoras sera llamada preguntar
const PI= 3.1415926  //Constante que representa el número pi
var volumen; //Variable donde pondremos el volumen
var radio; //variable que usaremos para preguntar el radio
//Preguntamos el radio
radio=preguntar("Por favor digame el radio de su esfera: ")
//Calculamos el volumen
volumen= (4/3) * PI * (radio ** 3)
//Imprimimos en pantalla el resultado de la operacion
console.log("El volumen de la esfera de radio " + radio + " es de " + volumen)


