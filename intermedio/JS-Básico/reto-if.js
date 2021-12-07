var opc1 = "Piedra";
var opc2 = "Papel";
var opc3 = "Tijera";

function resultado (user,cpu) {
    if(user != cpu) {
        if(user === opc1 && cpu === opc2) {
            console.log("Perdiste con piedra contra papel");
        } else if(user === opc1 && cpu === opc3) {
            console.log("Ganaste con piedra contra tijera");
        } else if(user === opc2 && cpu === opc1) {
            console.log("Ganaste con papel contra piedra");
        } else if(user === opc2 && cpu === opc3) {
            console.log("Perdiste con papel contra tijera");
        } else if(user === opc3 && cpu === opc1) {
            console.log("Ganaste piedra contra tijera");
        } else if(user === opc3 && cpu === opc2) {
            console.log("Ganaste con tijera contra papel");
        } 
    }
    else if(user === cpu) 
        console.log("Empate")
} 