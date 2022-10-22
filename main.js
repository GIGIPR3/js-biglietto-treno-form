
let inputNameElement = document.getElementById('nominativo');
console.log(inputNameElement);

let inputKMElement = document.getElementById('kmDaPercorrere');
console.log(inputKMElement);

let etaElement = document.getElementById('inputEta');
console.log(etaElement);

let btnGenera = document.getElementById('btnGenera').value;

/* const valueName = inputNameElement.value;

const valueKm = inputKMElement.value;

const valueEta = etaElement.value;

const costoKM = 0.21;

console.log(valueName);
    console.log(valueKm);
    console.log(valueEta);
    console.log('costo km:', costoKM );


        let prezzoBiglietto = valueKm * costoKM;
        
        let prezzoMaggiorenni = prezzoBiglietto * 0.60;
        
        let prezzoMinorenni = prezzoBiglietto * 0.80; */


function priceCalc(){

    const valueName = inputNameElement.value;

    const valueKm = inputKMElement.value;

    const valueEta = etaElement.value;

    const costoKM = 0.21; 


  console.log(valueName);
    console.log(valueKm);
    console.log(valueEta);
    console.log('costo km:', costoKM );


        let prezzoBiglietto = valueKm * costoKM;
        
        let prezzoMaggiorenni = prezzoBiglietto * 0.80;
        
        let prezzoMinorenni = prezzoBiglietto * 0.60;

    
    if (valueEta >= '18'){
        prezzoBiglietto = prezzoMaggiorenni.toFixed(2);
    }
    
    else if (valueEta < '18'){
        prezzoBiglietto = prezzoMinorenni.toFixed(2);
    }

    document.getElementById( 'costoTicket' ).innerHTML = prezzoBiglietto + "$";

    document.getElementById('risultatoNome').innerHTML = valueName;
} 