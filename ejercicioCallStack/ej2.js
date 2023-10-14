//En este ejercicio, exploraremos la asincronía en Node.js y cómo afecta a la pila de llamadas.

//Crea una función llamada imprimirMensaje que tome un mensaje como argumento y lo imprima en la consola.

//Llama a imprimirMensaje("Hola, Mundo") y observa el resultado.

//Ahora, utiliza setTimeout para hacer que imprimirMensaje se llame después de 2 segundos con el mismo mensaje. ¿Cómo cambia la ejecución?

//Escribe el flujo de ejecución de las llamadas y observa cómo las funciones se agregan y eliminan de la pila de llamadas.

function imprimirMensaje(mensaje){return mensaje}

console.log(imprimirMensaje("Hola, Mundo"))

//Entra primero a la pila el console.log, luego la funcion que imprimirMensaje, sale la función imprimirMensaje y por último el console.log

setTimeout(() => {
    console.log(imprimirMensaje('Hola, Mundo'));
}, 2000)

//Primero entra el console.log normal y la function de imprimir mensaje, luego salen y entra el setTimeout, luego el console.log de dentro y por ultimo
//entra la funcion imprimir mensaje de nuevo. Sale la funcion primero. Luego el console.log del setTimeout y por ultimo el setTimeout