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


const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedcourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        facebook: undefined,
        instagram: undefined,
    },
};

const juan = deepCopy(studentBase);
Object.seal(juan);
// Object.defineProperty(juan, "name", {
//     value: "Juanito",
//     configurable: false,
// });
// Object.isSealed(juanito); Nos dice si nuestras propiedades tienen Object.seal