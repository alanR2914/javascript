let estatura
let peso
debugger
do{
    estatura = parseFloat(prompt("ingrese su estatura en metros"));
    peso = parseFloat(prompt("ingrese su peso en kilogramos"));
    
}while(estatura == " " || peso == " " || isNaN(estatura) || isNaN(peso))

function calcularImc(estatura, peso) {
    let imc = peso / (estatura * estatura);

    if (imc < 18.5) {
        alert(" Su peso es de " + imc.toFixed(2) + " y usted esta bajo de peso.");
    }else if (imc >= 18.5 && imc <= 24.9) {
        alert("su peso es de " + imc.toFixed(2) + " y usted esta bien de peso.");
    }else if (imc >= 25 && imc <=29.9) {
        alert("su peso es de " + imc.toFixed(2) + " y esta con sobrepeso.");
    }else if (imc >= 30 && imc <= 39.9) {
        alert("su peso es de " + imc.toFixed(2) + " y tiene obesidad.");
    }else if (imc >= 40) {
        alert("su peso es de " + imc.toFixed(2) + " y tiene obesidad morbida.");
    }
    
}

calcularImc(estatura, peso);