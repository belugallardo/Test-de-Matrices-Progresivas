const contenedorMatrices = document.getElementById("contenedorMatriz");
const listadoMatrices= "../json/matrices.json"

let contadorSelect = 0;
let totalSeleccionado =0;
async function mostrarMatrices(){
    const respuestaFetch = await fetch(listadoMatrices);
    const response = await respuestaFetch.json();
            response.forEach(matriz => {
            const div = document.createElement("div");
            div.innerHTML = `<div class= matrices id= matriz>
                                <h1> ${matriz.nombre}</h1>
                                <div class=imagenPrincipal>
                                    <img src= "${matriz.urlPrincipal}">
                                </div>                
                                <div class= cardMatriz>
                                    <p> 1 </p>
                                    <img src= "${matriz.urlUno}">
                                    <p> 2 </p>
                                    <img src= "${matriz.urlDos}">
                                    <p> 3 </p>
                                    <img src= "${matriz.urlTres}">
                                </div>
                                <div class= cardMatriz>
                                    <p> 4 </p>
                                    <img src= "${matriz.urlCuatro}">
                                    <p> 5 </p>
                                    <img src= "${matriz.urlCinco}">
                                    <p> 6 </p>
                                    <img src= "${matriz.urlSeis}">
                                </div>
                                <div class=cardMatriz>
                                    <select id="select${contadorSelect}" name="select" >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                
                                        <button id= boton${contadorSelect}> Enviar </button>
                                    
                                    </div>
                            </div>`;
            contenedorMatrices.appendChild(div);
            contadorSelect++;

            const select = document.getElementById(`select${contadorSelect-1}`);
            const boton =document.getElementById(`boton${contadorSelect-1}`);

            boton.addEventListener("click", miFuncion);
            boton.addEventListener("click", comprobarRespuestas);
            boton.addEventListener("click", function(){
                totalSeleccionado++;
                this.disabled=true;
            });
            boton.addEventListener("click", () => {
                Toastify( {
                    text: "Respuesta enviada",
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                }).showToast();
            })

            select.addEventListener ("change", function(){
                boton.disable=false;
            });
        })
    }

mostrarMatrices()
const respuestaCorrecta = [4, 5, 1, 2, 6, 3, 6, 2];
const respuestaUsuario = [];


function miFuncion(){
let indice =respuestaUsuario.length;
let seleccionado = parseInt( document.getElementById(`select${indice}`).value[0]);
    respuestaUsuario.push (seleccionado);

    
}

function comprobarRespuestas() {
    let aciertos = 0;
    localStorage.setItem("aciertos","0");
    for (let i = 0; i < respuestaUsuario.length; i++) {
    if (respuestaUsuario[i] === respuestaCorrecta[i]) {
        aciertos++;
        localStorage.setItem("aciertos",aciertos.toString());
    }
    }
}

const botones = document.querySelectorAll("#boton", "#select");
for (let i = 0; i < botones.length; i++) {
botones[i].addEventListener("click", miFuncion);
botones[i].addEventListener("click", comprobarRespuestas);
botones [i].addEventListener("click",function() {
    this.disabled = true;
    });
}

const botonSiguiente = document.getElementById("botonSiguiente");
    let div = document.createElement("div");
    div.innerHTML = `<div>
                        <button id= botonSiguienten> Enviar respuestas </button>
                    </div>`
botonSiguiente.appendChild(div);
document.getElementById("botonSiguienten").classList.add("botones"); 

function pasarPagina(){
    if(totalSeleccionado < respuestaCorrecta.length){
        Swal.fire("Por favor, seleccione todas las respuestas antes de continuar");
    } else{
        window.location.href = "../pages/resultadoFinal.html";
    }
}

botonSiguiente.addEventListener ("click", pasarPagina);


