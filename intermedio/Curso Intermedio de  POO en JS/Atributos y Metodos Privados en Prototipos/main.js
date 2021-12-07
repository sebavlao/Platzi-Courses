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

// class SuperObject {
//     static isObject(subject) {
//         return typeof subject == "object";
//     }

//     static deepCopy(subject) {
//         let copySubject;
    
//         const subjectIsArray = isArray(subject);
//         const subjectIsObject = isObject(subject);
    
//         if (subjectIsArray) {
//             copySubject = [];
//         } else if (subjectIsObject) {
//             copySubject = {};
//         } else {
//             return subject;
//         }
    
//         for(key in subject) {
//             const keyIsObject = isObject(subject[key]);
    
//             if (keyIsObject) {
//                 copySubject[key] = deepCopy(subject[key]);
//             } else {
//                 if (subjectIsArray) {
//                     copySubject.push(subject[key]);
//                 } else {
//                     copySubject[key] = subject[key];
//                 }
//             }
//         }
    
//         return copySubject;
//     }
// }

function SuperObject() {}
SuperObject.isObject = function (subject) {
    return typeof subject == "object";
}
SuperObject.deepCopy = function (subject) {
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
    this.name = name;
    this.age = age;
    this.email = email;
    this.socialMedia = {
        twitter,
        facebook,
        instagram,
    };
    this.approvedCourses = approvedCourses;

    const private = {
        "_learningPaths": [],
    }

    Object.defineProperty(this, "learningPaths", {
        get() {
            return private["_learningPaths"];
        },
        set(newLp) {
             if (newLp instanceof LearningPath) {
                private["_learningPaths"].push(newLp);
            } else {
                console.warn("Alguno de los LPs no es una instancia del prototipo LearningPath")
            }
        },
    });

        for (learningPathIndex in learningPaths) {
            this.learningPaths = learningPaths[learningPathIndex];
        }
}




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
    ],

});


