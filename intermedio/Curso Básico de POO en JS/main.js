const natalia = {
    name: "Natalia",
    edad: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
};

function student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function(nuevoCursito) {
    //     this.cursosAprobados.push(nuevoCursito);
    // }
}

student.prototype.aprobarCurso = this.aprobarCurso = function(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introducción a la Producción de Videoujuegos",
        "Curso de Creación de Personajes",
    ]
);

// Hacer que Natalia apruebe otro curso
// natalia.cursosAprobados.push("Curso de Responsive Design");

// Prototipos con la sintaxis de clases

class student2 {
    constructor(/* name, age, cursosAprobados */{
        name,
        age,
        cursosAprobados = [],
        email,
    }) {
        this.name = name;
        this.email = email
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito = new student2({
    email: "miguelito@gmail.com",
    name: "Miguel",
    age: 28,
    cursosAprobados: [
        "Curso de Aálisis de Negocios para Cincia de Datos",
        "Curso de Principios de visualiación de datos para BI",
    ],
    // "Miguel",
    // 28,
    // [
    //     "Curso de Aálisis de Negocios para Cincia de Datos",
    //     "Curso de Principios de visualiación de datos para BI",
    // ],
});