/*
Lenguaje utilizado: JavaScript
Versión: ECMAScript 6
Hora de elaboración: 21:30
Fecha de elaboración: 2023-06-20
Elaborado por Ing(c) Jorge Luis López Grajales y Ing(c) Juan David Cespedez Mendoza
Universidad Tecnológica de Pereira
Carrera: Ingeniería de Sistemas y Computación
Dirigido al Doctor Ricardo Moreno Laverde

Programa: Pirámide invertida con letras del abecedario utilizando funciones recursivas
Descripción: Este programa muestra en pantalla una pirámide invertida de 13 columnas y 7 filas, donde cada fila contiene una letra del abecedario en orden descendente. La base de la pirámide comienza con la letra 'P' y cada fila siguiente continúa con la letra anterior en el abecedario restando dos posiciones. El programa utiliza funciones recursivas para imprimir las letras.

Instrucciones:
- No se requiere entrada de datos.

Dato de salida: Pirámide invertida con letras del abecedario.
*/




 var letra= 80; //letra p en el codigo ascii, funciona como base para generar las letras
 
 const columnas=13; //Numero de columnas que tendra la piramide
 const filas=7; // Numero de filas que tendra
 
 //Esta funcion devuelve el caracter que se le solicita en la funcion de imprimir columna
 function imprimirColumna(c,filaActual)
{
    //Este condicional revisa en que columna nos encontramos para devolver una letra o un espacio
    if(c<=filaActual || c>columnas-filaActual)
    {
        return "  "
    }
    else{
        //en esta linea se dice que dependiendo de en que fila se encuentre cambie la letra a mostrar
        return String.fromCharCode(80-(2*filaActual))+" "
    }
}
//Esta funcion imprime la columna completa
 function imprimirFila(filaActual)
 {
    //Esta es la impresion de la fila completa
    console.log(imprimirColumna(1,filaActual)+imprimirColumna(2,filaActual)+imprimirColumna(3,filaActual)+imprimirColumna(4,filaActual)+imprimirColumna(5,filaActual)+imprimirColumna(6,filaActual)+imprimirColumna(7,filaActual)+imprimirColumna(8,filaActual)+imprimirColumna(9,filaActual)+imprimirColumna(10,filaActual)+imprimirColumna(11,filaActual)+imprimirColumna(12,filaActual)+imprimirColumna(13,filaActual))
 }

//Esta funcion va avanzando las filas de la piramide conforme se ejecuta
 function imprimirPiramide(filaActual)
 {
    //Este if es el limite de la recursividad y se detiene cuando la fila alcanza el limite de 8
    if(filaActual==filas ) 
    {return} 
    else
    {
        imprimirFila(filaActual,0)
    }

    filaActual+=1//sumamos uno a la variable para avanzar fila
    imprimirPiramide(filaActual)
 }




//Aqui se inicia todo el programa
imprimirPiramide(0)



