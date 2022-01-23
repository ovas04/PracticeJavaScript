console.log("VINCULADA");
"use strict"

let sumar = () => {

    const forma = document.getElementById("forma");

    let operandoA = forma['operandoA']; 

    let operandoB = forma['operandoB'];

    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

    if(isNaN(resultado)){

        resultado = "La operacion no Incluye un numero";

    }

    document.getElementById("resultado").innerHTML = `Resulatado : ${resultado}`;


}


/*
let sumar = () =>{

    const a = document.getElementById("operandoA").innerHTML.value; // INDEFINIDO

    const b = document.getElementById("operandoB").innerHTML.value;  // INDEFINIDO

    console.log(`${a}  -  - - ${b}`);
    
    let suma = a.value + b.value;

    document.getElementById("resultado").innerHTML = suma;

}
*/