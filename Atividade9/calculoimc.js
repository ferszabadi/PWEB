var altura, peso, imc;

altura = parseFloat(prompt("Informe a altura em metros \n(Exemplo: 1.65)"));
peso = parseFloat(prompt("Informe o peso em kg \n(Exemplo: 72.5)"));

function calculoIMC(){
    
    imc = (peso/Math.pow(altura,2)).toFixed(2);

    if(imc < 18.5){
        alert("O IMC é " + imc + " (Magreza)");
    }
    if(imc >= 18.5 && imc < 25){
        alert("O IMC é " + imc + " (Normal)");
    }
    if(imc >= 25 && imc < 30){
        alert("O IMC é " + imc + " (Sobrepeso)");
    }
    if(imc >= 30 && imc < 40){
        alert("O IMC é " + imc + " (Obesidade)");
    }
    if(imc >= 40){
        alert("O IMC é " + imc + " (Obesidade Grave)");
    }

}

calculoIMC();