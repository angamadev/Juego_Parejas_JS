// importo las variables, y las funciones utiles 
import { iniciar,pausar} from "./temporizador.js";
import { colorBlancos } from "./variables.js";
import { guardarArrayDivs } from "./utilsFunctions.js";


// exporto la funcion de las parejas relacionada con los eventos
export {pareja}

// Funcion de los eventos de las parejas
// Asignamos la variable open a 3 estados:
// open = 0 => es cuando esta creada la caja
// open = 1 => es cuando la caja muestra su color pero no hay segunda caja abierta
// open = 2 => es cuando las parejas son correctas y quedan con los colores vistos ademas se eliminan sus eventos

function pareja(event) {
    // Inicio el temporizador
    iniciar();
    let arrayBoxes = document.querySelectorAll("div")
    // Recorro las cajas dentro del array
    for (let div of arrayBoxes) {
        // primera condicion, si el target es la caja seleccionada
        if (event.target == div) {
            // Entonces mostramos su color y asignamos open = 1
            div.style.backgroundColor = div.dataset.bg
            div.dataset.open = 1;
            let boxOpen = document.querySelectorAll(`[data-open="1"]`);
            // Segunda condicion, si ya tenemos 2 cajas reveladas entonces:
            if (boxOpen.length == 2) {
                // Si los 2 colores son iguales
                if (boxOpen[0].style.backgroundColor == boxOpen[1].style.backgroundColor) {
                    // Asignamos open = 2 a las 2 cajas  
                    boxOpen[0].dataset.open = 2;
                    boxOpen[1].dataset.open = 2;
                    console.log(`Pareja encontrada`);
                    // Eliminamos sus eventos
                    boxOpen[0].removeEventListener("click", pareja);              
                    boxOpen[1].removeEventListener("click", pareja);
                    guardarArrayDivs();
                    // Si son colores diferentes 
                } else {
                    // Esperamos 0.5 seg y volvemos a dejarlos en color de origen
                    // volviendo a dejar open = 0
                    setTimeout(()=> {  
                    boxOpen[0].style.backgroundColor = colorBlancos;
                    boxOpen[1].style.backgroundColor = colorBlancos;
                    boxOpen[0].dataset.open = 0;
                    boxOpen[1].dataset.open = 0;
                    }, 500);
                }
            }
        }
    }
            // Comprobamos si todas las parejas han sigo reveladas correctas
            let victoria = document.querySelectorAll(`[data-open="2"]`);
            if (victoria.length == arrayBoxes.length) {
                setTimeout(()=> { 
                pausar();
                alert(`Felicidades Terminaste`);
                }, 900);
            }
}

