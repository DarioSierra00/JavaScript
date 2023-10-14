//En este ejercicio, exploraremos cómo funciona el trabajo asincrónico en Node.js.

//Crea una función llamada buscarEnBD que simule una búsqueda en una base de datos. Esta función debería tomar un tiempo simulado (por ejemplo, 2 segundos) 
//antes de devolver un resultado.
function buscarEnBD(user){
    setTimeout(() =>{
        return user
    }, 2000)
}

//Llama a buscarEnBD("Usuario123") y observa cómo se comporta la pila de llamadas mientras espera la respuesta.

console.log(buscarEnBD("Usuario123"))

/*Entra el console.log, luego entra la funcion, despues el setTimeout y por ultimo devuelve el user, pero antes de devolverlo espera el tiempo que hemos puesto
en el setTimeout, lo devuelve, sale el timeout, luego la funcion y por ultimo el console.log con el user
 */

//Ahora, utiliza una función de devolución de llamada (callback) para manejar el resultado de buscarEnBD. La 
//función de devolución de llamada debería imprimir el resultado en la consola.

//Llama a buscarEnBD("Usuario456", callback) y observa cómo se maneja la respuesta asincrónica.

function buscarEnBD(usuario, callback) {
    setTimeout(() => {
        console.log(`Búsqueda completada para ${usuario}`);
        if (callback) {
            callback(usuario);
        }
    }, 2000);
}

function callback(usuario) {
    console.log(`Resultado de la búsqueda para ${usuario}`);
}

console.log(buscarEnBD("Usuario456", callback));
//Entra el console log, entra la funcion buscarEnBd, entra el timeOut se espera el tiempo introducido, entra el callback sale el callback, sale el 
//el timeout, sale la funcion buscarEnBd y sale el console log