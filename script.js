class Matriz {
    constructor(nombre, urlPrincipal, urlUno, urlDos, urlTres, urlCuatro, urlCinco, urlSeis, respuestaCorrecta) {
        this.nombre = nombre;
        this.urlPrincipal = urlPrincipal;
        this.urlUno = urlUno;
        this.urlDos = urlDos;
        this.urlTres = urlTres;
        this.urlCuatro = urlCuatro;
        this.urlCinco = urlCinco;
        this.urlSeis = urlSeis;
        this.respuestaCorrecta = respuestaCorrecta;
    }
}


const a1 = new Matriz("A1", "img/a1.jpg", "img/a11.jpg", "img/a12.jpg", "img/a13.jpg", "img/a14.jpg", "img/a15.jpg", "img/a16.jpg", 4);
const a2 = new Matriz("A2", "img/a2.jpg", "img/a21.jpg", "img/a22.jpg", "img/a23.jpg", "img/a24.jpg", "img/a25.jpg", "img/a26.jpg", 5);
const a3 = new Matriz("A3", "img/a3.jpg", "img/a31.jpg", "img/a32.jpg", "img/a33.jpg", "img/a34.jpg", "img/a35.jpg", "img/a36.jpg", 1);
const a4 = new Matriz("A4", "img/a4.jpg", "img/a41.jpg", "img/a42.jpg", "img/a43.jpg", "img/a44.jpg", "img/a45.jpg", "img/a46.jpg", 2);
const a5 = new Matriz("A5", "img/a5.jpg", "img/a51.jpg", "img/a52.jpg", "img/a53.jpg", "img/a54.jpg", "img/a55.jpg", "img/a56.jpg", 6);

const arrayMatrices = [a1, a2, a3, a4];

const contenedorMatrices = document.getElementById("contenedorMatriz");

let contadorSelect = 0;
arrayMatrices.forEach(matriz => {
    const div = document.createElement("div");
    div.innerHTML = `<h1> ${matriz.nombre}</h1>
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
                        <button id= boton> Enviar </button>
                    </div>`;
    contenedorMatrices.appendChild(div);
    contadorSelect++;
    
})

const respuestaCorrecta = [4, 5, 1, 2, 6];
const respuestaUsuario = [];

const boton = document.getElementById("boton");
const select= document.getElementById("select");

function miFuncion(){
console.log("hola")
let indice =respuestaUsuario.length;
let seleccionado = parseInt( document.getElementById(`select${indice}`).value[0]);
    console.log(seleccionado);
    respuestaUsuario.push (seleccionado);
    console.log (respuestaUsuario);
    
}

function comprobarRespuestas() {
    let aciertos = 0;
    for (let i = 0; i < respuestaUsuario.length; i++) {
    if (respuestaUsuario[i] === respuestaCorrecta[i]) {
        aciertos++;
    }
    }
    console.log(`Tienes ${aciertos} respuestas correctas de ${respuestaUsuario.length}`);
}

boton.addEventListener("click", miFuncion);
boton.addEventListener("click", comprobarRespuestas);

const botones = document.querySelectorAll("#boton", "#select");
for (let i = 0; i < botones.length; i++) {
botones[i].addEventListener("click", miFuncion);
botones[i].addEventListener("click", comprobarRespuestas);
botones [i].addEventListener("click",function() {
    this.disabled = true;
    });
}

