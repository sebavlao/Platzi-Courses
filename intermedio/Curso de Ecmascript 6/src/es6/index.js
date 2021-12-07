// Clase 1

function newFucntion (name, age, country) {
    var name = name || "oscar";
    var age = age || 32;
    var country = country ||"MX";
    console.log(name, age, country)
}

// es6

function newFunction2(name = "oscar", age = 32, country = "MX") {
    console.log(name, age, country);
}

newFunction2();
newFunction2("Ricardo", "23", "CO");

let hello = "Hello";
let world = "World";
let epicPharase = hello + " " + world;
console.log(epicPharase);
let epicPharase2 = `${hello} ${world}`;
console.log(epicPharase2);


// Clase 2

let lorem = "Dejo aca la clave para que este día, sea el más maravilloso de tu vida \n" + "otra clave para poder cambiar tu vida."

// es6

let lorem2 = `otra frase epica que voy a necesitar
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2)

//

let person = {
    "name1": "oscar",
    age1: 32,
    country1: "MX",
}

console.log(person.name1, person.age1);

let { name1 } = person;
console.log(name1);

//

let team1 = ["Oscar", "Jualian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camilas"];

let education = ["David", ...team1, ...team2];
console.log(education); 

//

{
    var globalVar = "Global Var";
}

{
    let globaLet = "Global Let";
    console.log(globaLet);
}

console.log(globalVar);

const a = "b";
a = "a";


// Clase 3

let name1 = "Oscar";
let age = 32;

// es5
obj = {name1: name1, age: age };
// es6
obj2 = {name1, age};
console.log(obj2);

//

const names = [
    {name1: "Oscar", age: 32},
    {name1: "Yesica", age: 27}
]

let listOfNames = names.map(function(item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name1, age, country) => {
}

const listOfNames4 = name1 => {
}

const square = num => num * num;

//

const helloPromises = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve("Hey!");
        } else {
            reject("Ups!!");
        }
    });
}

helloPromises()
    .then(response => console.log(response))
    .catch(error => console.log(error))


// clase 4

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//

// import { hello } from "./module";        No funciona en node LTS
// hello();

const hello = require("./module");
console.log(hello());

//

function* helloWorld() {
    if (true) {
        yield "Hello, ";
    } if (true) {
        yield "World";
    }
}

const generationHello = helloWorld();
console.log(generationHello.next().value);
console.log(generationHello.next().value);
console.log(generationHello.next().value);