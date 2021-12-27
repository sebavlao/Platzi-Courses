const messages = [
    "Ascar", 
    "Ana",
    "Nicolas",
    "Laura",
    "Sebastián",
    "Diego",
    "Tamara",
    "Magali",
    "Carlos"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };