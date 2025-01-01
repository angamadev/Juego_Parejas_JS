// Referencia de tiempo actual
let tiempoRef = Date.now();
// Variable para controlar si el temporizador está corriendo
let cronometrar = false;
// Variable para acumular el tiempo transcurrido
let acumulado = 0;

// Funcion Iniciar
function iniciar() {
    // Establecer cronometrar a verdadero para iniciar el temporizador
    cronometrar = true;
}

// Funcion Pausar
function pausar() {
    // Establecer cronometrar a falso para pausar el temporizador
    cronometrar = false;
}

// Funcion Reiniciar 
function reiniciar() {
    // Reiniciar el tiempo acumulado
    acumulado = 0;
    // Limpiar el localStorage
    localStorage.clear();
    // Recargar la página
    location.reload("index.html");
}

// Funcion acumulativa del tiempo
setInterval(() => {
    // Obtener el elemento del DOM donde se muestra el tiempo
    let tiempo = document.getElementById("tiempo");

    // Si el temporizador está corriendo
    if (cronometrar) {
        // Acumular el tiempo transcurrido
        acumulado += Date.now() - tiempoRef;
    }
    // Actualizar la referencia de tiempo
    tiempoRef = Date.now();
    // Mostrar el tiempo acumulado en el formato HH:MM:SS
    tiempo.innerHTML = formatearMS(acumulado);

    // Guardar el tiempo acumulado en localStorage
    localStorage.setItem('tiempoAcumulado', formatearMS(acumulado));
}, 1000 / 60);

// Restaurar el tiempo acumulado desde localStorage al iniciar
window.onload = () => {
    // Si hay un tiempo acumulado guardado en localStorage
    if (localStorage.getItem('tiempoAcumulado')) {
        // Obtener el tiempo guardado
        let tiempoGuardado = localStorage.getItem('tiempoAcumulado');
        // Mostrar el tiempo guardado en el elemento del DOM
        document.getElementById("tiempo").innerHTML = tiempoGuardado;
        // Convertir el tiempo guardado a milisegundos y asignarlo a acumulado
        acumulado = convertirHMSaMS(tiempoGuardado);
    }
};

// Funcion del Tiempo acumulativo
function formatearMS(tiempo_ms) {
    // Convertir milisegundos a segundos
    let St = Math.floor((tiempo_ms / 1000));
    // Obtener los segundos restantes
    let S = St % 60;
    // Obtener los minutos restantes
    let M = Math.floor((St / 60) % 60);
    // Obtener las horas restantes
    let H = Math.floor((St / 60 / 60));
    // Añadir ceros a la izquierda si es necesario
    Number.prototype.ceros = function (n) {
        return (this + "").padStart(n, 0);
    }
    // Devolver el tiempo en formato HH:MM:SS
    return H.ceros(2) + ":" + M.ceros(2) + ":" + S.ceros(2);
}

// Funcion para convertir HH:MM:SS a milisegundos
function convertirHMSaMS(hms) {
    // Dividir el tiempo en horas, minutos y segundos
    let [h, m, s] = hms.split(':').map(Number);
    // Convertir todo a milisegundos y devolver el resultado
    return ((h * 60 * 60) + (m * 60) + s) * 1000;
}

// Evento para el boton de reiniciar
let reiniciando = document.getElementsByTagName("button");
// Añadir evento de clic al primer botón para reiniciar el temporizador
reiniciando[0].addEventListener("click", reiniciar);

// Evento para el boton pausar 
let stop = document.getElementById('stop');
// Añadir evento de clic al botón de pausa para pausar el temporizador
stop.addEventListener("click", pausar);

// Exportar las funciones iniciar, pausar y reiniciar
export { iniciar, pausar, reiniciar };