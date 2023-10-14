//Ejercicio 1: Entendiendo la Pila de Llamadas

//En este ejercicio, vamos a analizar la pila de llamadas en JavaScript.

//Escribe una función llamada sumar que tome dos números como argumentos y devuelva su suma.
function sumar(a,b){restar(a,b)}
function restar(a,b){return a-b}

//Llama a la función sumar(5, 3) y observa cómo se comporta la pila de llamadas. Escribe los pasos en papel o en un editor de texto.
//Primero la función va al callStack, despues sale y entra la llamada a la funcion en el callStack.

    //Luego, modifica la función sumar para que llame a otra función llamada restar que tome dos números y devuelva su resta.



//Llama a sumar(8, 4) y observa cómo se comporta la pila de llamadas nuevamente. Anota los pasos.

console.log(sumar(8,4))

//Lo primero que entra en la pila es el console.log, el console.log llama a la funcion sumar se mete a la pila, encima de ella se llama a la 
//funcion restar, se ejecuta la función restar, sale y luego se ejecutaría funcion sumar, por último sale el console.log
