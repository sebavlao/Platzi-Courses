var opc1 = "Piedra";
var opc2 = "Papel";
var opc3 = "Tijera";

function game(user,cpu) {
    switch(true) {
        case user === cpu:
            console.log("Empate");
        break;
        case user === opc1 && cpu === opc2:
            console.log("Perdiste");
        break;
        case user === opc2 && cpu === opc3:
            console.log("Perdiste");
        break;
        case user === opc3 && cpu === opc1:
            console.log("Perdiste");
        break;
        default:
            console.log("Ganaste")
    }  
}