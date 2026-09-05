// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
{ text: "Mamá, en cada momento", time: 15 },
{ text: "Tu voz es como un refugio", time: 18 },
{ text: "En  los días grises y difíciles", time: 27 },
{ text: "Tu apoyo nunca me faltó", time: 32 },
{ text: "Cuidando de mis pasos siempre", time: 33 },
{ text: "¿Cómo agradecerte tanto amor?", time: 41 },
{ text: "Una sonrisa tuya lo cambia todo", time: 47 },
{ text: "Iluminas mi vida entera", time: 54 },
{ text: "Gracias por estar siempre ahí", time: 59 },
{ text: "Ese abrazo tuyo", time: 67 },
{ text: "Me da paz y me hace fuerte", time: 72 },
{ text: "Contigo todo es más sencillo", time: 78 },
{ text: "Eres mi guía y mi ejemplo", time: 83 },
{ text: "¿Cómo pagarte tanta bondad?", time: 91 },
{ text: "Tu ternura es mi mayor tesoro", time: 97 },
{ text: "Gracias por tu paciencia infinita", time: 104 },
{ text: "Te quiero con todo mi corazón", time: 108 },
{ text: "Mamá, en cada momento", time: 144 },
{ text: "Tu voz es como un refugio", time: 148 },
{ text: "En los días grises y difíciles", time: 153 },
{ text: "Tu apoyo nunca me faltó", time: 158 },
{ text: "Cuidando de mis pasos siempre", time: 164 },
{ text: "¿Cómo agradecerte tanto amor?", time: 169 },
{ text: "Una sonrisa tuya lo cambia todo", time: 176 },
{ text: "Iluminas mi vida entera", time: 183 },
{ text: "Gracias por estar siempre", time: 188 },
{ text: "Mamá.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
