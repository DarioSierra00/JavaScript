//1.1. Crea una página HTML con un botón. Agrega un escuchador de eventos para que cuando se haga clic en el botón, se muestre un mensaje en la consola del navegador.

let boton1 = document.getElementById('boton1')

boton1.addEventListener('click', () =>{
    console.log("currito")
})
//1.2. Agrega otro elemento HTML (por ejemplo, un enlace) en la página y agrega un escuchador de eventos para que cuando se pase el 
//mouse sobre el elemento, el color de fondo cambie.

let enlace = document.getElementById('pokemon')

enlace.addEventListener('mousemove', () => {
    document.body.style.backgroundColor = 'green'
})
//1.3. Agrega un escuchador de eventos al elemento document.body para que cuando se mueva el ratón en cualquier punto de la ventana
//del navegador, muestre en algún elemento (puedes agregar un <div> o <p> al HTML) la posición del puntero respecto al navegador y respecto a la 
//página.

document.body.addEventListener('mousemove', (event) => {
   document.body.appendChild(document.createElement('div').appendChild(document.createTextNode(event.clientX,event.clientY)))
})

//2.1 Agrega un escuchador de eventos al elemento document.body para que cuando se presione cualquier tecla, muestre un mensaje de alerta con el nombre de la tecla pulsada y su código.
/*document.body.addEventListener('keydown',(event) => {
    alert(`Has pulsado la tecla ${event.key} y su codigo ${event.code}`)
})*/
//2.2 Prueba el escuchador de eventos con diferentes teclas para verificar que muestra correctamente el nombre y el código de la tecla pulsada.

//3.1. Crea una lista desordenada (<ul>) con varios elementos de lista (<li>) dentro. Agrega un escuchador de eventos al elemento <ul> para que cuando se haga clic en cualquier 
//elemento de la lista, se muestre un mensaje en la consola indicando el texto del elemento clickeado.
let lista = document.querySelector("ul");

/*lista.addEventListener('click', (event) => {
    console.log(`Has clickeado ${event.target.innerText}`)
})*/


//3.2. Modifica el ejercicio anterior para que el mensaje en la consola muestre el nivel de jerarquía en el DOM del elemento clickeado. Por ejemplo, si se hace clic 
//en un <li>, el mensaje podría decir "Clickeaste en un elemento de nivel 2".

lista.addEventListener('click', (event) => {
    if(event.target.tagName == 'LI'){
        console.log(`clickeaste en el elemento de nivel 2`)
    }
})

//4.1. Crea un formulario HTML con campos de entrada para el nombre y el correo electrónico. Agrega un botón "Enviar" al formulario. Cuando se haga clic en el botón, valida que los 
//campos de entrada no estén vacíos y muestra un mensaje de éxito o error en la página en función de la validación.
let boton = document.getElementById("botoncito")



//4.2. Agrega una función que dispare un evento personalizado "formularioEnviado" cuando se envíe el formulario con éxito. Escucha este evento y muestra un mensaje 
//personalizado en la consola cuando se dispare.

const event = new Event('formularioEnviado');

boton.addEventListener('click', () => {
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    if(nombre.value != "" && email.value != ""){
        console.log("Enviado!");
        boton.dispatchEvent(event)
    }
    else{
        console.log("Incorrecto")
    }
})

boton.addEventListener('formularioEnviado', () => { console.log('formulario enviado correctamente') });

//5.1. Crea un nuevo evento personalizado llamado "miEvento" utilizando new CustomEvent().
const miEvento = new CustomEvent('miEvento');

//5.2. Agrega un escuchador de eventos a un elemento HTML (puedes usar un botón) para escuchar el evento "miEvento" y mostrar un mensaje de alerta cuando ocurra.
let botonEvento = document.getElementById('botonEvento');

botonEvento.addEventListener('miEvento', () => {
    alert("Alertaaaaaa")
})
botonEvento.dispatchEvent(miEvento)


//5.3. Dispara manualmente el evento "miEvento" en el elemento y verifica que se muestra el mensaje de alerta
