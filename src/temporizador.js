// Realmente copiado el codigo del temporizador, pero tuneado por mi

let tiempoRef = Date.now()
let cronometrar = false;
let acumulado = 0;

// Funcion Iniciar
function iniciar() {
    // Pone la variable cronometrar en verdadera
    cronometrar = true;
}

// Funcion Pausar
function pausar() {
    // Pone la variable cronometrar en falso
    cronometrar = false;
}

// Funcion Reiniciar 
function reiniciar() {
    // pone el tiempo a 0
    acumulado = 0;
    // Ademas reinicia el programa
    localStorage.clear();
    location.reload("index.html");
}
// Funcion acumulativa del tiempo
setInterval(() => {
    let tiempo = document.getElementById("tiempo")

    // Si cronometrar es verdadero (Que esta iniciado)
    if (cronometrar) {
    
        // Acumula el tiempo
        acumulado += Date.now() - tiempoRef
    }
    tiempoRef = Date.now()
    // Y lo muestras en pantalla
    tiempo.innerHTML = formatearMS(acumulado)

}, 1000 / 60);

// Funcion del Tiempo acumulativo
function formatearMS(tiempo_ms) {
    
    //Agregué la variable St para solucionar el problema de contar los minutos y horas.
        let St = Math.floor((tiempo_ms/ 1000))
        
        let S = St % 60;
        let M = Math.floor((St / 60) % 60);
        let H = Math.floor((St / 60 / 60));
        Number.prototype.ceros = function (n) {
            return (this + "").padStart(n, 0)
        }
        // if (localStorage.tiempo == "00:00:00") {
            // return H.ceros(2) + ":" + M.ceros(2) + ":" + S.ceros(2)
        
        return H.ceros(2) + ":" + M.ceros(2) + ":" + S.ceros(2)

        // return localStorage.tiempo;
}

// Evento para el boton de reiniciar
let reiniciando = document.getElementsByTagName("button");
reiniciando[0].addEventListener("click",reiniciar);

// Evento para el boton pausar 
let stop = document.getElementById('stop');
stop.addEventListener("click", pausar);

// Exporto las funciones
export {iniciar,pausar,reiniciar}