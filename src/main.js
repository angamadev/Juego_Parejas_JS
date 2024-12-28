// importo los estilos
import "/sass/main.scss";

// importo las funciones mas utiles
import { 
    crearTablero,
    recargarAnteriorPartida,
} from "./utilsFunctions.js";

// importo pareja de los eventos
import {
    pareja
} from "./evento.js";

// importo la clase Timer
import Timer from "./funcionTemporizador.js";

let arrayBoxes = document.querySelectorAll("div");


// Condicion de si tiene grabada una partida anterior
if (!localStorage.arrayDivsGuardar) {

    // Pedimos la funcion de crear tablero
    crearTablero();

// Si tiene grabada una partida, recargala
} else {
    alert("Tiene una partida Iniciada, Continuamos");
    recargarAnteriorPartida();
}

// Hago bucle para ejecutar cada evento
arrayBoxes = document.querySelectorAll("div");
for (let div of arrayBoxes) {   
    if (div.dataset.open != 2) {
    div.addEventListener("click", pareja); 
    }
}

// Exporto el array de las cajas
export {
    arrayBoxes
};

