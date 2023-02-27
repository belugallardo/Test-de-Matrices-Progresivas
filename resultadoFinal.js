let resultadoLocalStorage = localStorage.getItem("aciertos")

const personaJSON = localStorage.getItem("nuevoPaciente");
console.log (personaJSON);
const persona = JSON.parse(personaJSON);
console.log(persona);

function comenzarNuevo(){
    window.location.href = "index.html";
    localStorage.clear();
}

let resultado = "";

if (resultadoLocalStorage == 8) {
    resultado = "Óptimo";
} else if (resultadoLocalStorage >= 5) {
    resultado = "Bueno";
} else {
    resultado = "Regular";
}


const resultadoFinal = document.getElementById("resultadoFinal");
let div = document.createElement("div");
div.innerHTML = `<p> Felicitaciones ${persona.nombre}! Completaste el Test </p>
                    <p>Acertaste ${resultadoLocalStorage} de 8 respuestas, lo que implica que tu resultado sea ${resultado} </p>
                    <p>Te recuerdo que esto solo es una parte del Test de Matrices Progresivas, por lo que si quieres tener el analisis de tus respuestas debes resolver todo el test</p>
                    <button id=comenzarNuevo> Comenzar de nuevo</button>`
resultadoFinal.appendChild(div);
const botonNuevo = document.getElementById("comenzarNuevo");
botonNuevo.addEventListener("click", comenzarNuevo);