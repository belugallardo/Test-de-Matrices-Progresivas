class Pacientes {
    constructor(nombre, apellido, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
}
//Formulario en DOM

const datosPacientes = document.getElementById("datosPacientes");
    let div = document.createElement("div");
    div.innerHTML = ` 
                        <h1 class=contenedorPrincipal>Test de Matrices Progresivas</h1>
                        <h2>¿Que es el test de matrices progresivas?</h2>
                        <p class=textoPrincipal>El test de matrices progresivas de Raven es una prueba más que conocida y utilizada en el ámbito psicológico y psicopedagógico. Este test diseñado en 1938 por el psicólogo inglés John C. Raven, tenía el objetivo de calcular el factor “G” de inteligencia y su administración se restringió a los oficiales de la armada de Estados Unidos. El factor “G” de inteligencia hace referencia a la inteligencia general que condiciona cualquier ejecución o resolución de problemas, y es común a todas las habilidades que requieran de un componente intelectual. Este factor evidencia la habilidad de una persona a la hora de realizar un trabajo intelectual.
                        La característica principal de esta prueba es la de incentivar el razonamiento análico, la percepción y la capacidad de abstracción. Además, al ser un test no verbal se sirve de la comparación entre formas y el razonamiento por analogías, sin la necesidad de que la persona precise de una cultura o conocimientos previos.</p>
                        <h3>Caracteristicas de la prueba</h3>
                        <p class=textoPrincipal>Existen una serie de características distintivas que han convertido esta prueba en una de las más utilizadas. Estas características se dan tanto a nivel de administración, como de objetivos y fiabilidad</p> 
                        <p class=textoPrincipal> 1. Objetivo: Otro de los objetivos del Test de matrices Progresivas de Raven es el de medir la capacidad educativa de la persona.</p>
                        <p class=textoPrincipal> 2. Material: Se trata de una prueba que utiliza series de figuras geometricas abstractas e incompletas que se presentan a la persona de manera gradual y con dificultad ascendente.</p>
                        <p class=textoPrincipal> 3. Administración: Otra ventaja de esta prueba es que esta es susceptible a ser autoadministrada, asi como de administrarse tanto de manera individual como colectiva. </p>
                        <p class=textoPrincipal> 4. Fiabilidad y validez: Esta prueba presenta un 0.87-0.81 de fiabilidad.</p>
                    
                    <h3>Completa tus datos para comenzar</h3>
                    
                    <form  id="formulario">
                        <label class="formulario" for="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre"><br><br>

                        <label class="formulario" for="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="apellido"><br><br>

                        <label class="formulario" for="email">Email:</label>
                        <input type="email" id="email" name="email"><br><br>
                        
                        <input class="botones" id=botonPaciente  type="submit" value="Comenzar la prueba">
                        </form>
                    `
datosPacientes.appendChild(div);

const formulario = document.getElementById("formulario");

//Funcion boton enviar
function enviar(event){
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;

    const nuevoPaciente = new Pacientes (nombre,apellido,email);
    //Convierto el nuevo Paciente en JSON
    const pacienteJson = JSON.stringify(nuevoPaciente);
//Guardo la cadena JSON en el localStorage
    localStorage.setItem("nuevoPaciente", pacienteJson);
    window.location.href = "./pages/matrices.html";
}

//Recupero el objeto pacienteJson
const pacienteJson = localStorage.getItem("nuevoPaciente");
const paciente = JSON.parse(pacienteJson);


//Escuchador formulario
formulario.addEventListener("submit", enviar);