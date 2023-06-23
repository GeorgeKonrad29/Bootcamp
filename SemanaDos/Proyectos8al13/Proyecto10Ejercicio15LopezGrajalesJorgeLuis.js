/*
Lenguaje utilizado: JavaScript
Versión: ECMAScript 6
Hora de elaboración: 16:30
Fecha de elaboración: 2023-06-20
Elaborado por Ing(c) Jorge Luis López Grajales y Ing(c) Juan David Cespedez Mendoza
Universidad Tecnológica de Pereira
Carrera: Ingeniería de Sistemas y Computación
Dirigido al Doctor Ricardo Moreno Laverde

Programa: Cálculo del factorial
Descripción: Este programa lee un número y calcula su factorial utilizando una función recursiva. El factorial se calcula multiplicando todos los números enteros desde 1 hasta el número ingresado. El programa muestra el resultado del factorial en la consola.

Instrucciones:
- El programa solicitará al usuario ingresar un número entero positivo.

Datos de entrada: Número entero positivo.
Dato de salida: Factorial del número ingresado.

salvedad: no se aseguran resultados para numeros negativos
*/

// Función recursiva para calcular el factorial
function calcularFactorial(n,acumulado,p) {
    if (n == 0) {
      return 1;
    } else {
       if(p==n)
       {
        return acumulado
       } 
       else{
       acumulado= acumulado*p; 
       return calcularFactorial(n,acumulado,p+1);//p es la variable que da el numero de la nueva multiplicacion
       } 
    }
  }
  
  // Obtener el número para calcular su factorial
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("Ingrese un número entero positivo: ", (numero) => {
    // Verificar que el número ingresado sea válido
    if (numero < 0 || !Number.isInteger(Number(numero))) {
      console.log("El número ingresado no es válido.");
      readline.close();
      return;
    }
  
    // Calcular el factorial del número ingresado
    var factorial = calcularFactorial(numero,1,1);
  
    // Mostrar el resultado del factorial
    console.log(`El factorial de ${numero} es: `+ factorial);
  
    readline.close();
  });
  