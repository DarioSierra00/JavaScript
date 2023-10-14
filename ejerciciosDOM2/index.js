//1.1Utiliza document.createElement('etiqueta') para crear un nuevo elemento HTML <div>. Asigna este elemento a una variable llamada nuevoDiv

const nuevoDiv = document.createElement('div');

//1.2. Usa document.createTextNode('texto') para crear un nuevo nodo de texto con el contenido "Nuevo elemento de lista". Asigna este 
//nodo a una variable llamada textoNuevo.
let textoNuevo = document.createTextNode('Nuevo elemento de lista');


//1.3. Utiliza nuevoDiv.appendChild(nuevoNodo) para agregar textoNuevo como hijo del nuevoDiv. Luego, agrega 
//nuevoDiv como último hijo del elemento con el id "lipsum" en tu página web de ejemplo.
nuevoDiv.appendChild(textoNuevo);
//nuevoDiv.setAttribute('id','lipsum')
let lipsum = document.getElementById('lipsum');
lipsum.appendChild(nuevoDiv);


//1.4. Añade a la página:

//Un nuevo párrafo al final del DIV ‘lipsum’ con el texto “Nuevo párrafo añadido por javascript” (fíjate que una palabra estça en negrita)

let parrafo = document.createElement('p');
parrafo.innerHTML = 'Nuevo párrafo <b>añadido</b> por javascript';
lipsum.appendChild(parrafo);

//Un nuevo elemento al formulario tras el ‘Dato 1’ con la etiqueta ‘Dato 1 bis’ y el INPUT con id ‘input1bis’ que al cargar la página tendrá 
//escrito “Hola”

/*let formulario = document.querySelector('form')[0];
let label2 = document.querySelector('label:nth-of-type(2)');

let labelCreado = document.createElement('label');
labelCreado.innerHTML = "Dato 1 bis";

let input = document.createElement('input');
input.setAttribute('id','input1bis');
input.value = "Hola"

labelCreado.appendChild(input)

formulario.insertBefore(labelCreado,label2)*/

let form = document.getElementsByTagName("form")[0];
let segundoLabel = document.querySelector('label:nth-of-type(2)');

let labelDato1Bis = document.createElement("label");
labelDato1Bis.innerHTML = "Dato 1 bis ";

let input = document.createElement("input");
input.setAttribute("id","input1bis");
input.value = "Hola";

labelDato1Bis.appendChild(input);

let br = document.createElement("br");

form.insertBefore(br,segundoLabel); //Le he puesto un br para que quede más bonito
form.insertBefore(labelDato1Bis,br);

//2.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del div con id "lipsum" en tu página web de ejemplo. 
//Almacena este nodo en una variable llamada primerParrafo.

let primerParrafo = document.querySelector('#lipsum p:first-of-type');

//2.2. Crea un nuevo elemento <p> con el texto "Este es el nuevo segundo párrafo" y almacénalo en una variable llamada nuevoParrafo.

let nuevoParrafo = document.createElement('p');
nuevoParrafo.appendChild(document.createTextNode('Este es el nuevo segundo párrafo'));

//2.3. Utiliza el método primerParrafo.before(nuevoParrafo) para insertar nuevoParrafo antes del primer párrafo dentro del div "lipsum".

primerParrafo.before(nuevoParrafo);

//3.1. Utiliza document.querySelector() para obtener el primer elemento <li> dentro de una lista en tu página web de ejemplo. 
//Almacena este nodo en una variable llamada primerElemento.
let primerElemento = document.querySelector('li')

//3.2. Crea un nuevo elemento <li> con el texto "Nuevo elemento de lista" y almacénalo en una variable llamada nuevoElemento.
let nuevoElemento = document.createElement('li')
nuevoElemento.appendChild(document.createTextNode("Nuevo elemento de lista"))

//3.3. Utiliza el método primerElemento.replaceWith(nuevoElemento) para reemplazar el primerElemento con el nuevoElemento dentro de la lista.
primerElemento.replaceWith(nuevoElemento);

//3.4. Utiliza el método nuevoElemento.remove() para eliminar el nuevoElemento de la página.

nuevoElemento.remove();

//4.1. Utiliza document.querySelector() para obtener un elemento de tu página web que tenga un atributo id. Almacena este elemento en una variable.
let primerId = document.querySelector('*[id]')

//4.2. Usa el método elemento.setAttribute('nombreAtributo', 'valor') para agregar un atributo "data-nuevo" con el valor "123" 
//al elemento obtenido en el ejercicio 4.1.
primerId.setAttribute('data-nuevo','123')


//4.3. Utiliza el método elemento.removeAttribute('nombreAtributo') para eliminar el atributo "data-nuevo" del elemento.
primerId.removeAttribute('data-nuevo')

//4.4. Cambia el color de fondo de un elemento de tu página web utilizando la propiedad style.backgroundColor. Asegúrate de que el cambio de 
//estilo se realice mediante JavaScript.

let primerDiv = document.querySelector('div')

primerDiv.style.backgroundColor = 'green';

//5.1. Utiliza document.querySelector() para obtener un elemento de tu página web y asigna una clase "destacado" a este elemento 
//utilizando la propiedad elemento.className.
let elementoRandom = document.querySelector('label')
elementoRandom.className = "destacado";

//5.2. Utiliza la propiedad classList para agregar la clase "nuevo-estilo" al elemento obtenido en el ejercicio 5.1.
elementoRandom.classList.add("nuevo-estilo");

//5.3. Emplea la propiedad classList para eliminar la clase "destacado" del elemento obtenido en el ejercicio 5.1.
elementoRandom.classList.remove("destacado");

//5.4. Comprueba si el elemento obtenido en el ejercicio 5.1 tiene la clase "nuevo-estilo" utilizando el método classList.contains().
console.log(elementoRandom.classList.contains("nuevo-estilo"))

//¡Felicidades! Has completado los ejercicios de manipulación del DOM en JavaScript. Estos ejercicios te ayudarán a mejorar tus habilidades para crear, modificar y eliminar elementos en una página web de manera dinámica. ¡Sigue practicando para dominar el DOM por completo!