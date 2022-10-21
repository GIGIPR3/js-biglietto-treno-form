
let inputNameElement = document.getElementById("nominativo");
console.log("input " + inputNameElement);

let inputKM = document.getElementById("kmDaPercorrere").value;
console.log({ut})

let inputState = document.getElementById("inputState").value;

let btnGenera = document.getElementById("btnGenera").value;


function priceCalc(){

    const valueName = inputNameElement.value;

    const valueKm = inputKM.value;

    const valueEta = inputState.value;


    console.log(valueName, valueKm, valueEta);
}