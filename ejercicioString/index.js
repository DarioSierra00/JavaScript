/*Escribe una función llamada longitud que reciba como parámetro de entrada una cadena de texto y devuelva el número de letras que tiene.
Por ejemplo la siguiente llamada a la función:
longitud("Ana");
Debería devolver 3.*/

longitud("Ana");

function longitud(cadena){
    let result = 0;
    result = cadena.length;

    return result;
}

console.log(longitud("Ana"));

//Escribe una función llamada devuelvePrimeraLetra que reciba como parámetro de entrada una cadena de texto y devuelva la primera letra.

function devuelvePrimeraLetra(cadena){
    return cadena.charAt(0);
}

console.log(devuelvePrimeraLetra("Dario"));

//Escribe una función llamada devuelveUltimaLetra que reciba como parámetro de entrada una cadena de texto y devuelva la última letra.

function devuelveUltimaLetra(cadena){
    return cadena.charAt(cadena.length-1);
}

console.log(devuelveUltimaLetra("Dario"));

//Escribe una función llamada devuelveEnesimaLetra que reciba como parámetro de entrada una cadena de texto y un número y devuelva la letra que ocupe la posición indicada por el número.

function devuelveEnesimaLetra(cadena, numero){
    return cadena.charAt(numero);
}

console.log(devuelveEnesimaLetra("Hola tio",2));

//Utilizando el método substring imprimir las letras que van desde la posición 3 a la 7 de la cadena «wonderful day», es decir “derf”.

console.log("wonderful day".substring(3,7));

//Hacer una función devuelveMasLarga que reciba como parámetro de entrada dos cadenas de texto y devuelva la mayor. En caso de que ambas cadenas sean iguales, 
//devolveremos la correspondiente al primer parámetro de la función.

function devuelveMasLarga(cadena1,cadena2){
    return cadena1.length >= cadena2.length ? cadena1 : cadena2;
}

console.log(devuelveMasLarga("hola","adio"));

//Hacer una función devuelveMasLarga2 que reciba como parámetro de entrada tres cadenas de texto y devuelva la mayor. En caso de que al menos dos cadenas tengan igual longitud, 
//devolveremos el texto Hay al menos dos cadenas iguales.

function devuelveMasLarga2(cadena1,cadena2,cadena3){
    let resultado = "";
    if(cadena2.length === cadena1.length || cadena2.length == cadena3.length || cadena1.length == cadena3.length){
        resultado = "Hay al menos dos cadenas iguales";
    }
    else{
        resultado = cadena3.length > devuelveMasLarga(cadena1,cadena2).length ? cadena3 : devuelveMasLarga(cadena1,cadena2)
    }
    return resultado;

}

console.log(devuelveMasLarga2("Holasssss","loco","loquillo"));

/*Hacer una función generarNombre que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena cadena es menor que cinco, 
la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, 
devolver una nueva palabra utilizando las tres primeras letras de cada palabra.
*/

function generarNombre(cadena1,cadena2,cadena3){
    return cadena1.length + cadena2.length + cadena3.length < 15 ? "ERROR" : cadena1.substring(0,3)+cadena2.substring(0,3)+cadena3.substring(0,3);
}

console.log(generarNombre("Dario","Jesus","Yeray"));

//Hacer una función generarNombre2 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena cadena es menor que cinco, 
//la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, 
//devolver una nueva palabra utilizando la última letra de cada palabra.

function generarNombre2(cadena1,cadena2,cadena3){
    return cadena1.length + cadena2.length + cadena3.length < 15 ? "ERROR" : cadena1.charAt(cadena1.length-1)+cadena2.charAt(cadena2.length-1)+cadena3.charAt(cadena3.length-1);
}

console.log(generarNombre2("Dario","Jesus","Yeray"));

//Hacer una función generarNombre3 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena cadena es menor que cinco, 
//la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, 
//devolver una nueva palabra utilizando las tres últimas letras de cada palabra.

function generarNombre3(cadena1,cadena2,cadena3){
    return cadena1.length + cadena2.length + cadena3.length < 15 ? "ERROR" : cadena1.substr(cadena1.length-3,3)+
    cadena2.substr(cadena2.length-3,3) + cadena3.substr(cadena3.length-3,3)
}

console.log(generarNombre3("Dario","Jesus","Yeray"));

//Hacer una función tieneLetra que reciba como parámetro de entrada una cadena de texto y una letra y 
//devuelva true si la letra esta presente en la palabra y false si no lo esta. Utilizar para ello el método indexOf.

function tieneLetra(cadena,letra){
    return letra.length == 1 ? cadena.toLowerCase().indexOf(letra.toLowerCase()) != -1 : "Debe ser una letra solo"
}

console.log(tieneLetra("Hola que tal","x"));

//Hacer una función crearPalabra que reciba como parámetro de entrada una letra y un número y genere una nueva palabra que tenga la 
//letra introducida repetida tantas veces como indique el número.

function crearPalabra(letra, numero){
    return letra.repeat(numero)
}

console.log(crearPalabra("z",3));

//Completar el ejercicio anterior haciendo que en la nueva palabra generada las letras esten en mayúsculas.

function crearPalabra(letra, numero){
    return letra.repeat(numero).toUpperCase()
}

console.log(crearPalabra("z",3));

//Hacer una función addGuiones que reciba como parámetro de entrada una cadena texto y devuelva una nueva cadena que 
//tendrá un guion medio detrás de cada letra. Utilizar para ello un bucle for.

function addGuiones(cadena){
    let resultado = "";
    for(let i = 0; i < cadena.length ; i++){
        resultado += cadena[i] + "-";
    }
    return resultado;
}

console.log(addGuiones("Dario"));

//Hacer una función contadorDeLetras que reciba como parámetro de entrada una cadena de texto y una letra y devuelva el número de veces que esa letra esta 
//presente en la palabra. Utilizar para ello un bucle for.

function contadorDeLetras(cadena, letra){
    let cont = 0;

    for(let i = 0; i < cadena.length; i++){
        if(cadena[i].toLowerCase() == letra.toLowerCase()){
            cont++;
        }
    }

    return cont;
}

console.log(contadorDeLetras("Locotron","o"));

// Realizar la evolución del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o 
//minúsculas Hacer una función contadorDeLetras2 que reciba como parámetro de entrada dos cadenas de texto y una 
//letra y devuelva la cadena de texto en la que dicha letra 
//esta más presente. Utilizar para ello un bucle for. No tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas.

function contadorDeLetras2(cadena1,cadena2,letra){
    let cont1 = 0;
    let cont2 = 0;

    for(let i = 0; i < cadena1.length; i++){
        if(cadena1[i].toLowerCase() == letra.toLowerCase()){
            cont1++;
        }
    }

    for(let i = 0; i < cadena2.length; i++){
        if(cadena2[i].toLowerCase() == letra.toLowerCase()){
            cont2++;
        }
    }

    return cont1 > cont2 ? cadena1 : cadena2;
}

console.log(contadorDeLetras2("Dario","Jochemi","e"));

// Escribe una función llamada toCase que reciba como parámetro de entrada una cadena de texto y devuelva esa misma cadena de texto en minúsculas, 
//un guión medio y de nuevo esa misma cadena de texto en mayúsculas.

function toCase(cadena){
   return cadena.toLowerCase()+"-"+cadena.toUpperCase();
}

console.log(toCase("Dario"));

// Escribe una función llamada shortcut que tome dos cadenas de texto y devuelva la inicial de cada una de las dos cadenas.

function shortcut(cadena1,cadena2){
    return cadena1.charAt(0)+cadena2.charAt(0);
}

console.log(shortcut("Dario", "Mariana"));

//Escribe una función llamada firstChar, que devuelva la primera letra que no sea un espacio cuando una cadena de texto es pasada.
//Para ello, podemos eliminar los espacios en blanco que pudiera haber al principio y al final de la cadena de texto utilizando la el método trim(). 
//Si no estás muy seguro de como funciona este método, consúltalo en internet, que no es tan difícil!.

function firstChar(cadena){
    return cadena.trim().charAt(0);
}

console.log(firstChar("  miau "));

// Escribe una función llamada indexOfIgnoreCase que reciba dos cadenas de texto y 
//devuelva la posición de la primera ocurrencia de la segunda cadena de texto en la primera. La función no debería tener en cuenta mayúsculas y minúsculas.

function indexOfIgnoreCase(cadena1, cadena2) {
    return cadena1.toLowerCase().indexOf(cadena2.toLowerCase());
}

console.log(indexOfIgnoreCase("currito", "to"));

//Escribe una función llamada firstWord que reciba como parámetro de entrada una cadena de texto y 
//devuelva la primera palabra de esa cadena. La primera palaba de la cadena serán todos los caracteres que hay hasta el primer espacio.

function firstWord(cadena){
    return cadena.trim().substring(0,cadena.indexOf(" "));
}

console.log(firstWord("Hola tio"));

/*Parte 2: Template Literals

Crea una función llamada saludoPersonalizado que tome un nombre y una edad como argumentos y utilice un template 
literal para devolver un saludo personalizado que incluya el nombre y la edad.

Utiliza un template literal para crear una cadena que muestre una lista de compras con varios elementos. Luego, muestra esa cadena en la consola.

Escribe una función llamada informacionProducto que tome un objeto con información de un producto (nombre, precio, categoría, etc.) y utilice un 
template literal para generar una descripción del producto. Luego, muestra esa descripción en la consola.
*/

function saludoPersonalizado(nombre,edad){
    return `Hola ${nombre} con ${edad} años`
}

console.log(saludoPersonalizado("Dario",19));

function informacionProducto(nombre,precio,categoria){
    return `El producto con nombre ${nombre}, un precio de ${precio} perteneciente a la categoria de ${categoria}`
}

console.log(informacionProducto("Manzana",2,"Fruta"))

/*Parte 3: DNI y Letra

Implementa una función llamada validarDNI que tome un número de DNI (con o sin letra) como argumento y determine si es un DNI válido. 
La función debe calcular la letra correspondiente al número y compararla con la letra proporcionada (si se proporciona). Devuelve true si es válido y false si no lo es.

Prueba la función validarDNI con varios números de DNI, incluyendo algunos con letra y otros sin ella.*/ 

function validarDNI(dni){
    let resultado = false;
    const LETRADNI= "TRWAGMYFPDXBNJZSQVHLCKE";
    let posicion = dni.substring(0,8)%23;
    if(dni.length == 9 && dni.charAt(dni.length-1) == LETRADNI.charAt(posicion)){
        resultado = true;
    }
    return resultado;
}

console.log(validarDNI("30266693G"));