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


function createStudent({
    name = requireParam("name"),
    age,
    email = requireParam("email"),
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {} ) {
    const private = {
        "_name": name,
    };

    const public = {
        age,
        email,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        approvedCourses,
        learningPaths,
        readName() {
            return private["_name"];
        },
        changeName(newName) {
            private["_name"] = newName;
        },
    };

    Object.defineProperty(public, "readName", {
        configurable: false,
        writable: false,
    })

    Object.defineProperty(public, "changeName", {
        configurable: false,
        writable: false,
    })
    
    return public;
}


const juan = createStudent({
    name: "juanito",
    email: "juanito@frigoles.com",
});