alert ("Bienvenido a mi portfolio!")
// alert("Bienvenido a mi portfolio!")
const nombre = prompt("Cómo te llamas?")
alert("Hola " + nombre + "! Bienvenido a mi portfolio!")
// Array de frases
const frases = [
 "Tango Que Me Hiciste Mal - Estómagos",
 "El Esperitú del Vino - Heróes del Silencio",
 "American Beauty - Grateful Dead",
 "Montevideo Agoniza - Montevideo",
 "Dead Set - Grateful Dead",
 "La mejor venganza es un gran éxito.",
 "Avalancha - Heróes del Silencio.",
 "Ten - Pearl Jam."
    ];
    // Función para generar una frase aleatoria
    function generarFrase() {
        // Genera un índice aleatorio dentro del rango de la longitud del array de frases
        const indice = Math.floor(Math.random() * frases.length);
        // Obtiene la frase correspondiente al índice generado
        const fraseAleatoria = frases[indice];
        // Muestra la frase en el footer
        document.getElementById("frase").innerText = fraseAleatoria;
    }
    // Agrega un listener al botón para ejecutar la función generarFrase cuando se haga clic
    document.getElementById("btn-generar").addEventListener("click", generarFrase);
    