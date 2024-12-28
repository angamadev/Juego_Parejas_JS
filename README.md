# Memory Game - Matching Pairs 🎮

## Description 📖

This project is a simple memory game where players flip boxes to find matching pairs. The game keeps track of time and provides visual feedback when pairs are found. It is built using **JavaScript** for functionality and DOM manipulation, and it is designed to be lightweight and easy to use.

## Features ✨

- 🕹️ Interactive memory game.
- ⏱️ Timer functionality.
- 💾 Persistent state for game progress.
- 🏆 Victory alert when all pairs are found.

## Preview image Game🖼️

Includes a preview image of the game to give a better idea of its appearance.

![Preview of the page](/image_preview.png)

## How to Use 🚀

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   ```
2. Navigate to the project directory:
   ```bash
   cd <your-repo-name>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the game:
   ```bash
   npm run dev
   ```
5. Open the provided URL in your browser to play the game.

## Code Structure 🛠️

### Main Functions

#### `pareja(event)`
Handles the game logic for matching pairs:
- Reveals the box's color on click.
- Checks if two boxes are revealed:
  - ✅ If they match, they remain open, and their click events are removed.
  - ❌ If they don't match, they reset after 0.5 seconds.
- Tracks victory condition by checking if all pairs are revealed.

#### `iniciar()`
Starts the game timer.

#### `pausar()`
Pauses the game timer when the game is finished.

### Helper Functions 🔧

- `guardarArrayDivs()`: Saves the current state of the game.
- Uses imported utilities and variables for handling the game's logic and visual elements.

## Key Variables 🔑

- `colorBlancos`: Default color of the boxes when hidden.
- `arrayBoxes`: Collection of all boxes in the game grid.

## Example Usage 📋

```javascript
let arrayBoxes = document.querySelectorAll("div");
for (let div of arrayBoxes) {
    div.addEventListener("click", pareja);
}
```

## Project Structure 🗂️

```
.
├── index.html
├── style.css
├── temporizador.js
├── variables.js
├── utilsFunctions.js
└── main.js
```

## Future Enhancements 🔮

- 🌟 Add different levels of difficulty.
- 🎯 Include a scoring system.
- 📱 Make the game responsive for mobile devices.

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author 👨‍💻

Developed by **Your Name**.

Feel free to reach out for questions or suggestions:
- 📧 **Email:** your-email@example.com
- 🐙 **GitHub:** [your-username](https://github.com/your-username)

---

# Juego de Memoria - Parejas Coincidentes 🎮

## Descripción 📖

Este proyecto es un juego de memoria simple donde los jugadores voltean cajas para encontrar pares coincidentes. El juego realiza un seguimiento del tiempo y proporciona retroalimentación visual cuando se encuentran los pares. Está construido usando **JavaScript** para la funcionalidad y manipulación del DOM, y está diseñado para ser ligero y fácil de usar.

## Características ✨

- 🕹️ Juego de memoria interactivo.
- ⏱️ Funcionalidad de temporizador.
- 💾 Estado persistente para el progreso del juego.
- 🏆 Alerta de victoria cuando se encuentran todos los pares.

## Imagen del Juego 🖼️

Incluye una imagen de vista previa del juego para dar una mejor idea de su apariencia.

![Muestra una previsualización de la página](/image_preview.png)

## Cómo Usar 🚀

1. Clona el repositorio:
   ```bash
   git clone https://github.com/<tu-usuario>/<tu-repo>.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd <tu-repo>
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Ejecuta el juego:
   ```bash
   npm run dev
   ```
5. Abre la URL proporcionada en tu navegador para jugar.

## Estructura del Código 🛠️

### Funciones Principales

#### `pareja(event)`
Maneja la lógica del juego para encontrar parejas:
- Muestra el color de la caja al hacer clic.
- Verifica si hay dos cajas reveladas:
  - ✅ Si coinciden, permanecen abiertas y se eliminan sus eventos de clic.
  - ❌ Si no coinciden, se reinician después de 0.5 segundos.
- Verifica la condición de victoria comprobando si todas las parejas están reveladas.

#### `iniciar()`
Inicia el temporizador del juego.

#### `pausar()`
Pausa el temporizador del juego cuando se termina.

### Funciones Auxiliares 🔧

- `guardarArrayDivs()`: Guarda el estado actual del juego.
- Utiliza utilidades y variables importadas para manejar la lógica y los elementos visuales del juego.

## Variables Clave 🔑

- `colorBlancos`: Color predeterminado de las cajas cuando están ocultas.
- `arrayBoxes`: Colección de todas las cajas en la cuadrícula del juego.

## Ejemplo de Uso 📋

```javascript
let arrayBoxes = document.querySelectorAll("div");
for (let div of arrayBoxes) {
    div.addEventListener("click", pareja);
}
```

## Estructura del Proyecto 🗂️

```
.
├── index.html
├── style.css
├── temporizador.js
├── variables.js
├── utilsFunctions.js
└── main.js
```

## Mejoras Futuras 🔮

- 🌟 Añadir diferentes niveles de dificultad.
- 🎯 Incluir un sistema de puntuación.
- 📱 Hacer que el juego sea responsivo para dispositivos móviles.

## Licencia 📜

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Autor 👨‍💻

Desarrollado por **angamadev**.

No dudes en ponerte en contacto para preguntas o sugerencias:
- 📧 **Email:** tu-correo@example.com
- 🐙 **GitHub:** [tu-usuario](https://github.com/tu-usuario)
