function jugarCachipun(veces) {
    const opciones = ["Piedra", "Papel", "Tijera"];
    const output = document.getElementById("output");
    output.innerHTML = ""; // Limpiar el contenido anterior
    
    for (let i = 0; i < veces; i++) {
        output.innerHTML += "<p>Juego #" + (i + 1) + "</p>";
        
        // Solicitar la jugada del usuario
        let jugadaUsuario = prompt("Elige tu jugada (Piedra, Papel, Tijera):").toLowerCase();
        
        // Verificar si la jugada del usuario es válida
        if (!opciones.includes(jugadaUsuario)) {
            output.innerHTML += "<p>Jugada no válida. Por favor, elige entre Piedra, Papel o Tijera.</p>";
            continue;
        }
        
        // Generar jugada automática para la máquina
        let jugadaMaquina = opciones[Math.floor(Math.random() * 3)];
        
        output.innerHTML += "<p>Tu jugada: " + jugadaUsuario + "</p>";
        output.innerHTML += "<p>Jugada de la máquina: " + jugadaMaquina + "</p>";
        
        // Determinar al ganador
        if (jugadaUsuario === jugadaMaquina) {
            output.innerHTML += "<p>¡Es un empate!</p>";
        } else if (
            (jugadaUsuario === "piedra" && jugadaMaquina === "Tijera") ||
            (jugadaUsuario === "papel" && jugadaMaquina === "Piedra") ||
            (jugadaUsuario === "tijera" && jugadaMaquina === "Papel")
        ) {
            output.innerHTML += "<p>¡Felicidades! Has ganado.</p>";
        } else {
            output.innerHTML += "<p>¡Lo siento! Has perdido contra la máquina.</p>";
        }
    }
}

// Solicitar al usuario las veces que desea jugar
let veces = parseInt(prompt("¿Cuántas veces deseas jugar?"));

// Verificar si el valor ingresado es válido
if (isNaN(veces) || veces <= 0) {
    console.log("Número de juegos no válido.");
} else {
    jugarCachipun(veces);
}
