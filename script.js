function jugarCachipun(veces) {
    const opciones = ["piedra", "papel", "tijera"]; 
    const output = document.getElementById("output");
    output.innerHTML = ""; 
    
    for (let i = 0; i < veces; i++) {
        output.innerHTML += "<p>Juego #" + (i + 1) + "</p>";
        
        
        let jugadaUsuario = prompt("Elige tu jugada (Piedra, Papel, Tijera):");
        if (!jugadaUsuario) return; 
        
        
        if (!opciones.includes(jugadaUsuario.toLowerCase())) { 
            output.innerHTML += "<p>Jugada no válida. Por favor, elige entre Piedra, Papel o Tijera.</p>";
            continue;
        }
        
        jugadaUsuario = jugadaUsuario.toLowerCase(); 
        
        
        let jugadaMaquina = opciones[Math.floor(Math.random() * 3)];
        
        output.innerHTML += "<p class='jugada-usuario " + determinarColor(jugadaUsuario, jugadaMaquina) + "'>Tu jugada: " + jugadaUsuario + "</p>";
        output.innerHTML += "<p class='jugada-maquina " + determinarColor(jugadaMaquina, jugadaUsuario) + "'>Jugada de la máquina: " + jugadaMaquina + "</p>";
        
       
        let resultado = determinarResultado(jugadaUsuario, jugadaMaquina);
        output.innerHTML += "<p class='" + determinarColorResultado(resultado) + "'>" + resultado + "</p>";
        
        
        output.innerHTML += "<div class='game-divider'></div>";
    }
}

function determinarColor(jugada1, jugada2) {
    if (jugada1 === jugada2) {
        return "empate"; 
    } else {
        return ""; 
    }
}

function determinarResultado(jugadaUsuario, jugadaMaquina) {
    if (jugadaUsuario === jugadaMaquina) {
        return "¡Es un empate!";
    } else if (
        (jugadaUsuario === "piedra" && jugadaMaquina === "tijera") ||
        (jugadaUsuario === "papel" && jugadaMaquina === "piedra") ||
        (jugadaUsuario === "tijera" && jugadaMaquina === "papel")
    ) {
        return "¡Felicidades! Has ganado.";
    } else {
        return "¡Lo siento! Has perdido contra la máquina.";
    }
}

function determinarColorResultado(resultado) {
    if (resultado.includes("empate")) {
        return "empate";
    } else if (resultado.includes("ganado")) {
        return "ganado";
    } else {
        return "perdido";
    }
}

function jugar() {
    let veces = parseInt(prompt("¿Cuántas veces deseas jugar?"));

   
    if (isNaN(veces) || veces <= 0) {
        console.log("Número de juegos no válido.");
    } else {
        jugarCachipun(veces);
    }
}
