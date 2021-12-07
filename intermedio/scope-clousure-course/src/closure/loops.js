const anotherFunction = () => {
    for (let i = 0; i < 10; i++){
        // JAMAS UTILIZAR VAR. Más en loops, ya que var a diferencia de let no puede cambiar su valor.
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
};

anotherFunction()