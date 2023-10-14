/*Nota: Para lanzar una excepción personalizada utiliza javascript throw new Error("Mensaje de error") ahora puedes llamar a la función que puede lanzar la excepción en 
un bloque try - catch. Ejemplo:

function sumar(a,b) {
    if (isNaN(a)|| isNaN(b)){
        throw new Error("Los parámetros deben ser números");
    }
}

try {
    const resultado = sumar(5, "a");
    console.log("Resultado:", resultado);
} catch (error) {
    console.error("Error:", error.message);
} */

//En este ejercicio, vamos a tratar con errores en la pila de llamadas.

//Crea una función llamada dividir que tome dos números como argumentos y devuelva su división.
function dividir(a,b){return a/b}

//Llama a dividir(10, 0) y observa qué sucede. Deberías obtener un error de división por cero. ¿Cómo se maneja este error en la pila de llamadas?
console.log(dividir(10,0))

//Modifica la función dividir para manejar el caso de división por cero y lanzar una excepción personalizada.
function dividir(a,b) {
    if (a == 0 || b == 0){
        throw new Error("No se puede dividir entre 0");
    }
    return a/b;
}

//Llama a dividir(10, 0) nuevamente y observa cómo se maneja ahora el error.
dividir(10,0)

/*Lo que ha pasado es lo mismo de siempre, entra el console.log, luego la funcion y en la funcion salta la excepción por lo que para la pila de llamadas
*/