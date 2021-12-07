const juan = {
    name: "juanito",
    age: 18,
    approvedCourses: ["Curso 1"],

    addCourse(newCourse) {
        console.log("This", this);
        console.log("This.approvedCourse",this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
}

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));


/* Object.defineProperty(juan, "navigator", {
    value: "Chrome",
    enumerable: false,
    writable: true,
    configurable: true,
})
Object.defineProperty(juan, "editor", {
    value: "VSCode",
    enumerable: true,
    writable: false,
    configurable: true,
})
Object.defineProperty(juan, "terminal", {
    value: "WSL",
    enumerable: true,
    writable: true,
    configurable: false,
})
Object.defineProperty(juan, "pruebaNasa", {
    value: "extraterrestres",
    enumerable: false,
    writable: false,
    configurable: true,
}) */

// Object.seal(juan); Cambia el parametro "configurable" a false
// Object.freeze(juan); Cambia el parametro "configurable" y "writable" a false

console.log(Object.getOwnPropertyDescriptors(juan));