var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
while (estudiantes.length > 0) {
/*     console.log(estudiantes); */
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}