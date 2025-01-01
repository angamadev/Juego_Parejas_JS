// Archivo donde acumulo las funciones utiles

// Importo las variables necesarias
import { 
    colorBlancos,
    colorAleatorio,
} from "./variables";


// Funcion de crear tablero
function crearTablero() {

    // Pedimos por pantalla ñlas filas y columnas
    let cols = parseInt(prompt("numero de columnas"));
    let rows = parseInt(prompt("numero de filas"));
    // Si las cartar no son pares pedir de nuevo
    while ((cols * rows) % 2 !== 0) {
        alert("Las cartas tienen que ser pares repite de nuevo");
        cols = parseInt(prompt("numero de columnas"));
        rows = parseInt(prompt("numero de filas"));
    }
    // creo la variable cuadricula
    const cuadricula = document.getElementsByClassName("game");
    // Recorro todo la cuadricula creando el numero de cajas pertinente
    if (!cuadricula.length < 1) {
        for (let col = 0; col < cols; col ++) {;
            for (let row =0; row < rows; row ++) {
            let box = document.createElement("div");
            box.dataset.open = 0;
            cuadricula[0].append(box);
            }
        }
        // Asignamos colores a el array de las boxes
        let arrayBoxes = document.querySelectorAll("div");
        asignarColores(arrayBoxes);

        // // Reseteo los colores
        resetColores();

        //  Hago nuevo array y barajo

        barajarArray();
        guardarArrayDivs();

    }
    localStorage.setItem("columnas", cols);
    localStorage.setItem("filas", rows);
}



// funcion para asignar colores al array de las parejas
function asignarColores(array) {
    // Creo una variable con el total de las parejas que hay en la cuadricula
    let parejas = array.length / 2
    for (let col = 0; col < (parejas *2);col = col + 2) {
        array[col].style.backgroundColor = colorAleatorio()
        array[col].dataset.bg = array[col].style.backgroundColor;
        
        array[col + 1].style.backgroundColor = array[col].style.backgroundColor;
        array[col + 1].dataset.bg = array[col].style.backgroundColor;
        array[col].dataset.open = 0;
        array[col + 1].dataset.open = 0;
    }  
}

// Funcion para barajar el Nodelist del array con las cajas
function barajarArray() {
    const list = document.querySelector('section');
    for (let box = list.children.length; box >= 0; box--) {
        list.appendChild(list.children[Math.random() * box | 0]);
    }
};

// funcion reset colores
function resetColores() {
    let todosDivs = document.querySelectorAll("div");
    // Recorro todas las cajas y borro los colores predefinidos anteriormente
    for (let divs of todosDivs) {
        divs.style.backgroundColor = colorBlancos;
        divs.dataset.open = 0;
    }
}

// Crear array para guardar en localStorage
function guardarArrayDivs() {
    const arrayParaGuardar = []
    const arrayDivs = document.querySelectorAll("div");
    for (let div of arrayDivs) {
        arrayParaGuardar.push(div.outerHTML)
    }
    // guardo el tiempo transcurrido hasta entonces
    let tiempoElemento = document.getElementById("tiempo");
    if (tiempoElemento) {
        let guardarTiempo = tiempoElemento.innerText;
        localStorage.setItem("tiempo", guardarTiempo);
    }
    localStorage.setItem("arrayDivsGuardar",JSON.stringify(arrayParaGuardar));
}

// Creo funcion para recargar la partida
function recargarAnteriorPartida() {

    // Transformo a un array el JSON guardado en localStorage
    const arrayDivs = JSON.parse(localStorage.arrayDivsGuardar);
    // creo la variable cuadricula
    const cuadricula = document.querySelector(".game");

    // creo las variables cols y rows de los datos de localStorage
    let cols = parseInt(localStorage.getItem("columnas"));
    let rows = parseInt(localStorage.getItem("filas"));

    // Recupero el tiempo de la grabacion y lo añado al span del tiempo

    let spanTiempo = document.getElementById("tiempo");
    debugger;
    if (spanTiempo && localStorage.getItem("tiempo")) {
            let tiempo = localStorage.getItem("tiempo").split(":");
            let H = tiempo[0].padStart(2, '0'); // Convierte la parte de horas a entero
            let M = tiempo[1].padStart(2, '0'); // Convierte la parte de minutos a entero
            let S = tiempo[2].padStart(2, '0'); // Convierte la parte de segundos a entero
            // spanTiempo.innerHTML = H + ":" + M + ":" + S
            spanTiempo.innerHTML = `${H}:${M}:${S}`;
    } else {
        spanTiempo.innerHTML = "00:00:00"
    }

    // Recorro todo la cuadricula creando el numero de cajas almacenado
    let parejas = cols * rows
    for (let div = 0; div < parejas; div ++) {;
        cuadricula.innerHTML += arrayDivs[div]
    }
}

// Exporto las funciones
export {
    resetColores,
    crearTablero,
    asignarColores,
    barajarArray,
    guardarArrayDivs,
    recargarAnteriorPartida,
}
