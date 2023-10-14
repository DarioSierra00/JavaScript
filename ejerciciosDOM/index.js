//1.1. Utiliza document.getElementById() para obtener el nodo con el id "main" de tu página web de ejemplo. Imprime el nodo en la consola.
let main = document.getElementById('lipsum');
console.log(main)

//1.2. Usa document.getElementsByClassName() para obtener todos los elementos con la clase "error" en tu página web de ejemplo. Imprime la colección en la consola.
let error = document.getElementsByClassName('error')
console.log(error)

//1.3. Utiliza document.getElementsByTagName() para obtener todos los elementos <p> de tu página web de ejemplo. Imprime la colección en la consola.
let parrafo = document.getElementsByTagName('p')
console.log(parrafo)

//1.4. Emplea document.querySelector() para obtener el primer párrafo con la clase "error" en tu página. Imprime el nodo en la consola.
let parrafoError = document.querySelector('p.error');
console.log(parrafoError)
//1.5. Usa document.querySelectorAll() para obtener todos los párrafos con la clase "error" en tu página. Imprime la colección en la consola. 

let parrafoErrores = document.querySelectorAll('p.error')
console.log(parrafoErrores)

//1.6. Obtén por consola, al menos de 2 formas diferentes:

//El elemento con id ‘input2’
console.log(document.getElementById('input2'))
//console.log(document.getElementsByTagName('input2'[1]))

//La colección de párrafos
console.log(document.getElementsByTagName('p'))
console.log(document.querySelectorAll('p'))

//Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’
console.log(document.querySelector('div').querySelectorAll('p'))
let div = document.querySelector('div')
console.log(div.getElementsByTagName('p'))

//El formulario (ojo, no la colección con el formulario sino sólo el formulario)
console.log(document.querySelector('form'))
console.log(document.getElementsByTagName('form')[0])

//Todos los inputs
console.log(document.getElementsByTagName('input'))
console.log(document.querySelectorAll('input'))

//Sólo los inputs con nombre ‘sexo’
console.log(document.getElementsByName('sexo'))
console.log(document.querySelectorAll('input[name=sexo]'))
//Los items de lista de la clase ‘important’ (sólo los LI)
console.log(document.getElementsByTagName('ul')[0].getElementsByClassName('important'))
console.log(document.querySelectorAll('li.important'))


//2.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del div con id "lipsum" en tu página web de ejemplo. Imprime el nodo en la consola.
console.log(document.getElementById('lipsum').querySelector('p'))

//2.2. Emplea el método nextElementSibling para obtener el siguiente hermano del párrafo obtenido en el ejercicio 2.1. Imprime el nodo en la consola.
console.log(document.getElementById('lipsum').querySelector('p').nextElementSibling)
//2.3. Utiliza el método parentElement para obtener el elemento padre del párrafo obtenido en el ejercicio 2.2. Imprime el nodo en la consola.
console.log(document.getElementById('lipsum').querySelector('p').parentElement)
//2.4. Obtén por consola, al menos de 2 formas diferentes:

//El primér párrafo que hay dentro del div ‘lipsum’
console.log(document.getElementById('lipsum').querySelector('p'))
console.log(document.querySelector('div#lipsum').querySelector('p:first-of-type'))

//El segundo párrafo de ‘lipsum’
console.log(document.getElementById('lipsum').querySelectorAll('p')[1])
console.log(document.querySelector('div#lipsum').querySelector('p').nextElementSibling)

//El último item de la lista
console.log(document.querySelector('ul').querySelector('li:last-of-type'))
//console.log(document.getElementsByTagName('ul')[0].querySelector('li:last-of-type'))
//La label de ‘Escoge sexo’
console.log(document.querySelector('label:last-of-type'))
console.log(document.querySelector('input[name=sexo]').parentElement)

//3.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del div con id "lipsum" en tu página web de ejemplo. Almacena este nodo en una variable.
let primerParrafo = document.querySelector('div#lipsum').querySelector('p');

//3.2. Utiliza la propiedad innerHTML para obtener el contenido HTML completo del párrafo obtenido en el ejercicio 3.1. Imprime el contenido en la consola.
console.log(primerParrafo.innerHTML)

//3.3. Emplea la propiedad textContent para obtener el contenido de texto del párrafo obtenido en el ejercicio 3.1. Imprime el contenido en la consola.
console.log(primerParrafo.textContent)

//3.4. Utiliza document.querySelector() para obtener el primer input de tipo "text" en tu página web de ejemplo. Almacena este nodo en una variable.
let primerInput = document.querySelector('input[type=text]')

//3.5. Usa la propiedad value para obtener el valor del input obtenido en el ejercicio 3.5. Imprime el valor en la consola, al menos de 2 formas:
console.log(primerInput.value)

//El innerHTML de la etiqueta de ‘Escoge sexo’
console.log(document.querySelector('label:last-of-type').innerHTML)

//El textContent de esa etiqueta
console.log(document.querySelector('label:last-of-type').textContent)

//El valor del primer input de sexo
console.log(document.querySelector('input[name=sexo]:first-of-type'))

//El valor del sexo que esté seleccionado (difícil, búscalo por Internet)
console.log(document.querySelector('input[name=sexo]:checked').value)