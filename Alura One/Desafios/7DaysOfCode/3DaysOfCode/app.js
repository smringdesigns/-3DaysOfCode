
// Bienvenida
alert("¡Bienvenido al juego de elecciones en programación!");

// Preguntar al usuario si quiere seguir en Front-End o Back-End
let area = prompt("¿Quieres seguir hacia el área de Front-End o Back-End?. Escribe 'Front-End' o 'Back-End'.");

let lenguaje = "";
    if (area === "front-end") {
        lenguaje = prompt("¿Quieres aprender React o Vue?. Escribe 'React' o 'Vue'").toLowerCase();
    } else if (area === "back-end") {
        lenguaje = prompt("¿Quieres aprender C# o Java?. Escribe 'C#' o 'Java'").toLowerCase();
    } else {
        alert("Opción invalida. Debes escribir 'Front-End' o 'Bck-End'.'");
    };

// Mensaje de elección
alert(`¡Genial! Has elegido especializarte en ${lenguaje}.`);

// Preguntar si se quiere especializar o ser Fullstack
let decision = prompt("¿Quieres seguir especializándote en el área elegida o convertirte en Fullstack?. Escribe 'Especializarme' o 'Fullstack'.");

    if (decision.toLowerCase() === "especializarme") {
        alert("¡Perfecto! Seguirás profundizando en tu área y serás un experto.");
    } else if (decision.toLowerCase() === "fullstack") {
        alert("¡Fantástico! Aprenderás tanto Front-End como Back-End.");
    } else {
        alert("Opción no válida. Continuaremos con el juego.");
    };

// Preguntar por tecnologías adicionales a aprender
let lenguajeAprender = [];
let continuar = true;

    while (continuar) {
        let nuevolenguaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender?");
        
        if (nuevolenguaje) {
            lenguajeAprender.push(nuevolenguaje); // Agregar tecnología al array
            alert(`¡Interesante! ${nuevolenguaje} es una excelente opción.`);
        }

        let respuesta = prompt("¿Quieres agregar otra tecnología?. Escribe 'ok' para continuar o cualquier otra cosa para salir");

        if (respuesta.toLowerCase() !== "ok") {
            continuar = false;
        }
    };

// Mostrar la lista de tecnologías que el usuario quiere aprender
    if (lenguajeAprender.length > 0) {
        alert(`Aquí están las tecnologías que te gustaría aprender: ${lenguajeAprender.join(", ")}`);
    } else {
        alert("No agregaste ninguna tecnología extra.")
    };

    alert("¡Gracias por jugar! Mucho éxito en tu camino de aprendizaje.");