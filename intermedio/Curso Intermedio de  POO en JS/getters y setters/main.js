function isObject(subject) {
    return typeof subject == "object";
}
function isArray(subject) {
    return Array.isArray(subject);
}

function deepCopy(subject) {
    let copySubject;

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for(key in subject) {
        const keyIsObject = isObject(subject[key]);

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
}

function requireParam(param) {
    throw new Error(param + " es obligatorio");
}


function LearningPath({
    name = requiredParam("name"),
    courses = [],
}) {
    this.name = name;
    this.courses = courses;


    // const private = {
    //     "_name": name,
    //     "_courses": courses,
    // };
    // const public = {
    //     get name() {
    //         return private["_name"];
    //     },
    
    //     set name(newName) {
    //         if (newName.length != 0) {
    //             private["_name"] = newName;
    //         } else {
    //             connsole.warn ("Tu nombre debe tener al menos 1 carácter");
    //         }
    //     },
    //     get courses() {
    //         return private["_courses"];
    //     },
    // };

    // return public;
}



function Student({
    name = requireParam("name"),
    age,
    email = requireParam("email"),
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {} ) {
    if (isArray(learningPaths)) {
        this._learningPaths = [];
        for (learningPathIndex in learningPaths) {
          if (learningPaths[learningPathIndex] instanceof LearningPath) {
            this.learningPaths.push(learningPaths[learningPathIndex]);
          }
        }
    }

    this.name = name;
    this.age = age;
    this.email = email;
    this.socialMedia = {
        twitter,
        facebook,
        instagram,
    };
    this.approvedCourses = approvedCourses;
    // const private = {
    //     "_name": name,
    //     "_learningPaths": learningPaths,
    // };

    // const public = {
    //     age,
    //     email,
    //     socialMedia: {
    //         twitter,
    //         instagram,
    //         facebook,
    //     },
    //     approvedCourses,

    //     get name() {
    //         return private["_name"];
    //     },
    
    //     set name(newName) {
    //         if (newName.length != 0) {
    //             private["_name"] = newName;
    //         } else {
    //             connsole.warn ("Tu nombre debe tener al menos 1 carácter");
    //         }
    //     },

    //     get learningPaths() {
    //         return private["_learningPaths"];
    //     },
    
    //     set learningPaths(newLearningPaths) {
    //         if (!newLearningPaths.name) {
    //             console.warn("Tu Learning Path no tiene la propiedad name");
    //             return;
    //         }
            
    //         if(!newLearningPaths.courses) {
    //             console.warn("tu Learning Paths no tiene courses");
    //             return;
    //         }
            
    //         if(!isArray(newLearningPaths.courses)) {
    //             console.warn("tu Learning Paths no es una (*lista de cursos)");
    //             return;
    //         }

    //         private["_learningPaths"].push(newLearningPaths);
    //     },
    // }


    
    // return public;
}

this.learningPaths = learningPaths;


const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web", 
})
const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
})

const juan = new Student({
    name: "juanito",
    email: "juanito@frigoles.com",
    learningPaths: [
        escuelaWeb,
        escuelaData,
        {
            name: "Escuela del Impostor",
            courses: [],
        },
    ],

});


