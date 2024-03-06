function jugarCachipun(veces) {
    const opciones = ["piedra", "papel", "tijera"]; // Cambiar opciones a minúsculas
    const output = document.getElementById("output");
    output.innerHTML = ""; // Limpiar el contenido anterior
    
    for (let i = 0; i < veces; i++) {
        output.innerHTML += "<p>Juego #" + (i + 1) + "</p>";
        
        // Solicitar la jugada del usuario
        let jugadaUsuario = prompt("Elige tu jugada (Piedra, Papel, Tijera):");
        if (!jugadaUsuario) return; // Si el usuario cancela, salir del juego
        
        // Verificar si la jugada del usuario es válida
        if (!opciones.includes(jugadaUsuario.toLowerCase())) { // Convertir la jugada a minúsculas aquí
            output.innerHTML += "<p>Jugada no válida. Por favor, elige entre Piedra, Papel o Tijera.</p>";
            continue;
        }
        
        jugadaUsuario = jugadaUsuario.toLowerCase(); // Convertir la jugada a minúsculas después de verificar la validez
        
        // Generar jugada automática para la máquina
        let jugadaMaquina = opciones[Math.floor(Math.random() * 3)];
        
        output.innerHTML += "<p>Tu jugada: " + jugadaUsuario + "</p>";
        output.innerHTML += "<p>Jugada de la máquina: " + jugadaMaquina + "</p>";
        
        // Determinar al ganador
        if (jugadaUsuario === jugadaMaquina) {
            output.innerHTML += "<p>¡Es un empate!</p>";
        } else if (
            (jugadaUsuario === "piedra" && jugadaMaquina === "tijera") || // Cambiar opciones a minúsculas aquí
            (jugadaUsuario === "papel" && jugadaMaquina === "piedra") ||  // Cambiar opciones a minúsculas aquí
            (jugadaUsuario === "tijera" && jugadaMaquina === "papel")    // Cambiar opciones a minúsculas aquí
        ) {
            output.innerHTML += "<p>¡Felicidades! Has ganado.</p>";
        } else {
            output.innerHTML += "<p>¡Lo siento! Has perdido contra la máquina.</p>";
        }
    }
}

function jugar() {
    // Solicitar al usuario las veces que desea jugar
    let veces = parseInt(prompt("¿Cuántas veces deseas jugar?"));

    // Verificar si el valor ingresado es válido
    if (isNaN(veces) || veces <= 0) {
        console.log("Número de juegos no válido.");
    } else {
        jugarCachipun(veces);
    }
}
