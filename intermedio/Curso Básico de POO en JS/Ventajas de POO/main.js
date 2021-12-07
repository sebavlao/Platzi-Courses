/* const juan1 = {
    name: "JuanDC",
    username: "juandc",
    points: 100,
    socialnMedia: {
        twitter: "fjuandc",
        instagram: "fjuandc",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso de Responsive Design",
            ]
        },
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso de Introducción para la Producción de Vgs",
                "Curso de Unreal Engine",
                "Curso de Unioty 3D",
            ],
        },
    ],
};

const miguelito1 = {
    name: "Miguelito",
    username: "miguelitofeliz",
    points: 1000,
    socialnMedia: {
        twitter: "miguelitofeliz",
        instagram: "miguelito_feliz",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso DataBusiness",
        "Curso DataViz",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso de Responsive Design",
            ]
        },
        {
            name: "Escuela de Data Science",
            courses: [
                "Curso de DataBusiness",
                "Curso DataViz",
                "Curso de Tableau",
            ],
        },
    ],
}; */

class Comment {
    constructor({
      content,
      studentName,
      studentRole = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar() {
        console.log(this.studentName + " (" + this.studentRole + ") ");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}


function videoPlay(id) {
    const urlSecreta = "htttps://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se está reproduciendo desde la url " + urlSecreta);
}

function videoStop() {
    const urlSecreta = "htttps://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
}

class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }

    pausar() {
        videoStop(this.videoID);
    }
}

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,/* twitter: twitter */
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
    }

    publicarComentario (commentContent) {
        const commet = new Comment({
            content: commentContent,
            studentName: this.name,
        })
        commet.publicar();
    }
}


class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos.")
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en ingles.")
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    publicarComentario (commentContent) {
        const commet = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        })
        commet.publicar();
    }
}

class Course {
    constructor({
      name,
      classes = [],
      isFree = false,
      lang = "spanish",
    }) {
      this._name = name;
      this.classes = classes;
      this.isFree = isFree;
      this.lang = lang;
    }
  
    get name() {
      return this._name;
    }

/*     changeName(nuevoNombrecito) {
        this._name = nuevoNombrecito;
    } */

    set name(nuevoNombrecito) {
        if (nuevoNombrecito === "Curso Malito de Programación Básica") {
          console.error("Web... no");
        } else {
          this._name = nuevoNombrecito; 
        }
      }
    }
  

    const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    isFree: true,
  });

  const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
  });

  const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
    lang: "english",
  });


class LearningPaths {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    };
}

const escuelaWeb = new LearningPaths({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        "Curso Básico de HTML y CSS",
        cursoPracticoHTML,
        "Curso de Animaciones y Transiciones con CSS",
    ],
})

const escuelaVsg = new LearningPaths({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
        "Curso diseño de Videoujuegos",
        "Curso de Unreal Engine",
        "Curso de Maquetación 3D",
    ],
})

const escuelaBuss = new LearningPaths({
    name: "Escuela Business Managment",
    courses: [
        "Curso de Ahorro",
        "Curso de manejo de Impuestos",
        "Curso de Inversión",
    ],
})







const juan = new FreeStudent({
    name: "JuanDc",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    LearningPaths: [
        escuelaWeb,
        escuelaVsg
    ]
})

const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "miguelito_feliz",
    LearningPaths: [
        escuelaWeb,
        escuelaBuss,
    ],
})

const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "f@gep.com",
    instagram: "freddiervega",
})