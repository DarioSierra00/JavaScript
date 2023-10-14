/*Ejercicio 1: Crear y Manipular Arrays

Crea un array llamado listaCompra con los siguientes elementos: 'Peras', 'Manzanas', 'Kiwis', 'Plátanos', y 'Mandarinas'.

Usa el método splice para eliminar las 'Manzanas' de la lista de compra.

Usa el método splice para añadir 'Naranjas' y 'Sandía' después de 'Plátanos' en la lista de compra.

Usa el método splice para reemplazar 'Kiwis' con 'Cerezas' y 'Nísperos' en la lista de compra.

Imprime la lista de compra final por la consola. */

let listaCompra = ['Peras','Manzanas','Kiwis','Platanos','Mandarinas'];

listaCompra.splice(1,1)

listaCompra.splice(3,0,'Naranjas','Sandía')

listaCompra.splice(1,1,'Cerezas','Nísperos')

console.log(listaCompra.toString());

/*Ejercicio 2: Copiar un Array

Crea un array llamado original con algunos elementos.

Crea un nuevo array llamado copia que sea una copia de original utilizando el método slice.

Modifica un elemento en copia y verifica si también se modifica en original. */

let original = ['Betis',4,'Fekir']

let copia = original.slice();

copia.splice(1,1)
console.log(original.toString());
console.log(copia.toString());

/*Ejercicio 3: Ordenar Notas

Crea un array llamado notas con las siguientes calificaciones: [4, 8, 3, 10, 5].

Escribe una función que tome el array de notas y lo ordene de menor a mayor. Utiliza el método sort.

Imprime el array de notas ordenado por la consola.

 */

let notas = [4,8,3,10,5];

notas.sort((a , b) => (a - b));
console.log(notas.toString());

/*Ejercicio 4: Ordenar un Array de Objetos

Crea un array de objetos llamado alumnos donde cada objeto tiene las propiedades nombre y edad. Agrega al menos 5 objetos a este array.

Escribe una función que tome el array de alumnos y lo ordene por edad de menor a mayor utilizando el método sort.   

Imprime el array de alumnos ordenado por la consola. */

let alumnos = [
    {
        nombre : 'Dario',
        edad : 19
    },
    {
        nombre : 'Jesus',
        edad : 19
    },
    {
        nombre : 'Yeray',
        edad : 19
    },
    {
        nombre : 'Rafita',
        edad : 32
    },
    {
        nombre : 'Josemi',
        edad : 30
    },
]

alumnos.sort((alumno1 , alumno2) => (alumno1.edad - alumno2.edad));


console.log(alumnos);

/*Ejercicio 5: Otros Métodos de Array

Crea dos arrays, array1 y array2, con algunos elementos.

Utiliza el método concat para concatenar los dos arrays en uno nuevo llamado concatenado.

Utiliza el método reverse para invertir el orden de los elementos en concatenado.

Utiliza el método indexOf para encontrar la posición del elemento 'Plátanos' en concatenado.

Utiliza el método lastIndexOf para encontrar la última posición del elemento 'Plátanos' en concatenado. */

let array1 = ['Csgo 2','Miercoles',27]
let array2 = ['Platano',85]

let concatenado = array1.concat(array2);

concatenado.reverse();

concatenado.indexOf('Platano');
concatenado.indexOf('Platano');

console.log(concatenado)