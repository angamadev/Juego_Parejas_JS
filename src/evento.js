// Importar las funciones, variables y constantes necesarias
import { iniciar, pausar } from "./temporizador.js";
import { colorBlancos } from "./variables.js";
import { guardarArrayDivs } from "./utilsFunctions.js";

// Exportar la función pareja
export { pareja }

// Definir la función pareja que maneja el evento de clic en las cartas
function pareja(event) {
    // Iniciar el temporizador
    iniciar();
    // Obtener todas las cajas (divs) del tablero
    let arrayBoxes = document.querySelectorAll("div");
    // Recorrer todas las cajas
    for (let div of arrayBoxes) {
        // Si la caja clicada es la misma que la caja actual en el bucle
        if (event.target == div) {
            // Mostrar el color de la caja
            div.style.backgroundColor = div.dataset.bg;
            // Marcar la caja como abierta
            div.dataset.open = 1;
            // Obtener todas las cajas abiertas
            let boxOpen = document.querySelectorAll(`[data-open="1"]`);
            // Si hay dos cajas abiertas
            if (boxOpen.length == 2) {
                // Si los colores de las dos cajas abiertas son iguales
                if (boxOpen[0].style.backgroundColor == boxOpen[1].style.backgroundColor) {
                    // Marcar las cajas como encontradas
                    boxOpen[0].dataset.open = 2;
                    boxOpen[1].dataset.open = 2;
                    console.log(`Pareja encontrada`);
                    // Eliminar el evento de clic de las cajas encontradas
                    boxOpen[0].removeEventListener("click", pareja);              
                    boxOpen[1].removeEventListener("click", pareja);
                    // Guardar el estado actual del tablero
                    guardarArrayDivs();
                } else {
                    // Si los colores no coinciden, ocultar los colores después de 0.5 segundos
                    setTimeout(() => {  
                        boxOpen[0].style.backgroundColor = colorBlancos;
                        boxOpen[1].style.backgroundColor = colorBlancos;
                        // Marcar las cajas como cerradas
                        boxOpen[0].dataset.open = 0;
                        boxOpen[1].dataset.open = 0;
                    }, 500);
                }
            }
        }
    }
    // Comprobar si todas las parejas han sido encontradas
    let victoria = document.querySelectorAll(`[data-open="2"]`);
    if (victoria.length == arrayBoxes.length) {
        // Si todas las parejas han sido encontradas, pausar el temporizador y mostrar un mensaje de felicitación
        setTimeout(() => { 
            pausar();
            alert(`Felicidades Terminaste`);
        }, 900);
    }
}