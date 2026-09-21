// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: " Tía Anto, tía querida", time: 15 },
  { text: "Hoy quería tener un detalle", time: 18 },
  { text: "Y obvio que pensé en vos", time: 27 },
  { text: "No podía dejar pasar este día", time: 32 },
  { text: "Sin darte tus flores amarillas", time: 33 },
  { text: "Aunque vengan en forma de código", time: 41 },
  { text: "Sabés que el cariño es 100% real", time: 47 },
  { text: "Porque te merecés todo lo lindo", time: 54 },
  { text: "Sos esa persona que siempre está", time: 59 },
  { text: "En las buenas y en las difíciles", time: 67 },
  { text: "Cuidándome y mimándome siempre", time: 72 },
  { text: "Gracias por tantos consejos", time: 78 },
  { text: "Y por los abrazos que me salvan", time: 83 },
  { text: "Sabés que contás conmigo", time: 91 },
  { text: "Para absolutamente cualquier cosa", time: 97 },
  { text: "Tías como vos hay pocas", time: 104 },
  { text: "Así que feliz día de las flores", time: 108 },
  { text: "Para mi tía preferida", time: 144 },
  { text: "Que la vida te llene de colores", time: 148 },
  { text: "Nunca pierdas esa dulzura", time: 153 },
  { text: "Porque iluminás todo a tu alrededor", time: 158 },
  { text: "Guardate este mensajito raro", time: 164 },
  { text: "Como recordatorio de lo que te quiero", time: 169 },
  { text: "Sos una genia total", time: 176 },
  { text: "Te quiero un montón, nunca lo dudes", time: 183 },
  { text: "¡Feliz día, tía!", time: 188 },
  { text: "🌻💛", time: 140 }
];

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
