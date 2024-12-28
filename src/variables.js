// Creo funcion con colores diferentes
function colorAleatorio() {
    let red = Math.floor(Math.random() * 255); // rojo random
    let green = Math.floor(Math.random() * 255);// verde random
    let blue = Math.floor(Math.random() * 255);// azul random
    return `rgb(${red}, ${green}, ${blue}`;// Mezcla los 3 colores
}

// Color de fondo de las cartas
let colorBlancos = `rgba(79, 34, 34, 0.171)`;

// Exporto las variables
export {
    colorBlancos,
    colorAleatorio,
};

  