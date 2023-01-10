/* function verRespuesta(){
    //alert("karen llorona")
    let labelRes1 = document.getElementById("res1")
    let labelRes2 = document.getElementById("res2")
    labelRes1.style.color = "green"
    labelRes2.style.color = "green"
} */

/* let btnRespuesta = document.getElementById("btnRespuesta")
btnRespuesta.addEventListener("click", verRespuesta) */



/* function verAlert(texto){
    alert(texto)
}

let alternativasPregunta1 = document.getElementsByClassName("radioPregunta")
for(let alternativa of alternativasPregunta1){
    alternativa.addEventListener("click", ()=>verAlert(alternativa.value))
} */
/* let inputP1_1 = document.getElementById("p1_1")
inputP1_1.addEventListener("click", ()=>verAlert("Gato"))
let inputP1_2 = document.getElementById("p1_2")
inputP1_2.addEventListener("click", ()=>verAlert("Perro")) */

/* function mostrarAlert(){
    alert("yo soy el tutulo principal")
}

let tituloPrincipal = document.getElementById("titulo")
tituloPrincipal.addEventListener("click", mostrarAlert) */

let verRespuesta = () => {
    clearInterval(timerId)
    MostrarRespuestas()
    let alternativaSeleccionadoP1 = document.querySelector("input[name=pregunta1]:checked")
    let alternativaSeleccionadoP2 = document.querySelector("input[name=pregunta2]:checked")
    let alternativaSeleccionadoP3 = document.querySelector("input[name=pregunta3]:checked")

    let tipoPregunta = document.querySelector("input[name=tipoPreguntas]:checked")
    let respuestasCorrectas =tipoPregunta.value == "tipoAnimal"?[ "gato","guau","4"]:[ "tijera","sarten","reloj"]


    let respuesta1 = "correcta"
    let respuesta2 = "correcta"
    let respuesta3 = "correcta"
    let puntaje = 30
    if (alternativaSeleccionadoP1.value != respuestasCorrectas[0]) {
        respuesta1 = "incorrecta"
        puntaje-=10
    }
    if (alternativaSeleccionadoP2.value != respuestasCorrectas[1]) {
        respuesta2 = "incorrecta"
        puntaje-=10
    }
    if (alternativaSeleccionadoP3.value != respuestasCorrectas[3]) {
        respuesta3 = "incorrecta"
        puntaje-=10
    }
    alert(`Pregunta Nº1:${respuesta1}\nPregunta Nº2:${respuesta2}\nPregunta Nº3:${respuesta3}\nPuntaje total:${puntaje}`)

    /* alert(`La alternativa seleccionada de la pregunta1 es ${alternativaSeleccionadoP1.value} y la respuesta es gato\nLa alternativa seleccionada de la pregunta2 es ${alternativaSeleccionadoP2.value} y la respuesta es guau`)
 */}
let volver = () => {
    let pantalla1 = document.getElementById("pantalla1")
    let pantalla2 = document.getElementById("pantalla2")
    let divPreguntasTipoAnimal=document.getElementById("preguntasTipoAnimal")
    let divPreguntasTipoArtefacto=document.getElementById("preguntasTipoArtefacto")
    pantalla1.style.display = "block"
    pantalla2.style.display = "none"
    divPreguntasTipoAnimal.style.display = "none"
    divPreguntasTipoArtefacto.style.display = "none"

    //para pintar nuevamente de negro a las respuestas al volver, para jugar de nuevo
    let respuestasCorrectas = document.getElementsByClassName("respuestaCorrecta")
    for(let respuestaCorrecta of respuestasCorrectas){
        respuestaCorrecta.style.color = "black"
    }

    let radios = document.querySelectorAll("input[type=radio]")
    for(let radio of radios){
        radio.checked = false
    }

    clearInterval(timerId)
}

let irPantalla2 = () => {
    let pantalla1 = document.getElementById("pantalla1")
    let pantalla2 = document.getElementById("pantalla2")
    pantalla1.style.display = "none"
    pantalla2.style.display = "block"

}
let iniciarJuego = () => {
    let inputNombre = document.getElementById("inputNombre")
    if (inputNombre.value == "") {
        alert("Para Continuar Escriba su Nombre")
    } else {
        //alert(`Tu Nombre es:${inputNombre.value}`)
        let saludo = document.getElementById("saludo")
        saludo.innerHTML = `Hola ${inputNombre.value.toUpperCase()}`
        irPantalla2()
        preguntaEleccion()
        iniciarConteo()
    }


}
let preguntaEleccion = () => {
    let tipoPregunta = document.querySelector("input[name=tipoPreguntas]:checked")
    let divPreguntasTipoAnimal = document.getElementById("preguntasTipoAnimal")
    let divPreguntasTipoArtefacto = document.getElementById("preguntasTipoArtefacto")
    //let alternativa = "marcada"
    if (tipoPregunta.value == "tipoAnimal") {
        divPreguntasTipoAnimal.style.display = "block"

    } else {
        divPreguntasTipoArtefacto.style.display = "block"
    }

}


function MostrarRespuestas() {
    //alert("karen llorona")
/*     let labelRes1 = document.getElementById("res1")
    let labelRes2 = document.getElementById("res2")
    let labelRes3 = document.getElementById("res3")
    labelRes1.style.color = "green"
    labelRes2.style.color = "green"
    labelRes3.style.color = "green" */
    let respuestasCorrectas = document.getElementsByClassName("respuestaCorrecta")
    for(let respuestaCorrecta of respuestasCorrectas){
        respuestaCorrecta.style.color = "green"
    }
}

/* let cambiarPantalla=()=>{
    let pantalla1 = document.getElementById("pantalla1")
    let pantalla2 = document.getElementById("pantalla2")
    if(pantalla1.classList.contains("verElemento")){
        pantalla1.classList.remove("verElemento")
        pantalla1.classList.add("ocultarElemento")
        pantalla2.classList.remove("ocultarElemento")
        pantalla2.classList.add("verElemento")
    }else{
        pantalla1.classList.remove("ocultarElemento")
        pantalla1.classList.add("verElemento")
        pantalla2.classList.remove("verElemento")
        pantalla2.classList.add("ocultarElemento")
    }
    // if(pantalla1.style.display=="none"){
    //     pantalla1.style.display="block"
    //     pantalla2.style.display="none"
    // }else{
    //     pantalla1.style.display="none"
    //     pantalla2.style.display="block"
    // }
    
} */

let btnRespuesta = document.getElementById("btnRespuesta")
btnRespuesta.addEventListener("click", verRespuesta)

let botonJugar = document.querySelector("#botonJugar")
botonJugar.addEventListener("click", iniciarJuego/* cambiarPantalla */)

let botonVolver = document.querySelector("#botonVolver")
botonVolver.addEventListener("click", volver/* cambiarPantalla */)

let tipoArtefacto = document.querySelector("#tipoArtefactos")
tipoArtefacto.addEventListener("click", preguntaEleccion)

function disminucionTiempo(){
    conteo-=1
    mireloj.innerHTML = `Tienes ${conteo} segundos para responder las preguntas`
    if(conteo==0){
        clearInterval(timerId)
        alert("Tu tiempo ha terminado")
        verRespuesta()
    }
}



let timerId 
let conteo
function iniciarConteo(){
    conteo = 10
    let mireloj = document.getElementById("mireloj")
    mireloj.innerHTML = `Tienes ${conteo} segundos para responder las preguntas`
    timerId= setInterval(() => disminucionTiempo(), 1000);
}
//clearInterval(timerId);