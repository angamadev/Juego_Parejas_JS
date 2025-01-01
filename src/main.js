// Importo los estilos
import "/sass/main.scss";

// Importo las funciones más útiles desde utilsFunctions.js
import { 
    crearTablero,
    recargarAnteriorPartida,
} from "./utilsFunctions.js";

// Importo la función pareja desde evento.js
import {
    pareja
} from "./evento.js";

// Selecciono todos los elementos div del documento
let arrayBoxes = document.querySelectorAll("div");

// Condición para verificar si hay una partida guardada en localStorage
if (!localStorage.arrayDivsGuardar) {
    // Si no hay una partida guardada, crear un nuevo tablero
    crearTablero();
} else {
    // Si hay una partida guardada, recargarla
    alert("Tiene una partida Iniciada, Continuamos");
    recargarAnteriorPartida();
}

// Actualizo la selección de todos los elementos div del documento
arrayBoxes = document.querySelectorAll("div");

// Bucle para añadir el evento de clic a cada caja que no esté abierta (open != 2)
for (let div of arrayBoxes) {   
    if (div.dataset.open != 2) {
        div.addEventListener("click", pareja); 
    }
}

// Exporto el array de las cajas
export {
    arrayBoxes
};