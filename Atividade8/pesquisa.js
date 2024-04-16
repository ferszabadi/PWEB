var idade = [], sexo = [], opiniao = [];

for (i = 0; i < 45; i++) {
    idade[i] = parseFloat(prompt("Digite sua idade: "));
    sexo[i] = prompt("Informe seu sexo (F ou M): ");
    opiniao[i] = parseFloat(prompt("Classifique o filme em: \n1- Péssimo \n2- Regular \n3- Bom \n4- Ótimo \nDigite sua nota: "));
}

//Média de idade
function mediaIdade() {

    var soma = 0;

    for (i = 0; i < idade.length; i++) {
        soma = soma + idade[i];
    }

    var media = soma / idade.length;

    return alert("A média das idades é: " + media.toFixed(2));
}

mediaIdade();

//Pessoa mais velha
function maiorIdade(){

    maiorIdade = 0;

    for (i = 0; i < idade.length; i++) {

        if (idade[i] > maiorIdade){
            maiorIdade = idade[i];
        }

    }

    return alert("A pessoa mais velha tem " + maiorIdade + " anos");

}

maiorIdade();

//Pessoa mais nova
function menorIdade(){

    menorIdade = 200;

    for (i = 0; i < idade.length; i++) {

        if (idade[i] < menorIdade){
            menorIdade = idade[i];
        }
        
    }

    return alert("A pessoa mais nova tem " + menorIdade + " anos");

}

menorIdade();

//Quantidade de respostas 'Péssimo'
function notaPessimo(){

    cont = 0;

    for (i = 0; i < opiniao.length; i++) {

        if (parseFloat(opiniao[i]) === 1){
            cont = cont + 1;
        }

}

    return alert("Quantidade de pessoas que classificaram o filme como péssimo: " + cont);

}

notaPessimo();

//% de pessoas que responderam 'Ótimo' e 'Bom'
function notasPositivas(){

    cont = 0;
    porcentagem = 0;

    for (i = 0; i < opiniao.length; i++) {

        if ((parseFloat(opiniao[i]) === 3) || (parseFloat(opiniao[i]) === 4)){
            cont = cont + 1;
        }

}

    porcentagem = (cont / opiniao.length) * 100;

    return alert("Porcentagem de pessoas que classificaram o filme como bom ou ótimo: " + porcentagem + "%");

}

notasPositivas();

//Número de mulheres e homens que responderam o questionário
function contarSexo(){

    mulheres = 0;
    homens = 0;

    for (i = 0; i < sexo.length; i++) {

        if ((sexo[i] === 'F') || (sexo[i] === 'f')){
            mulheres = mulheres + 1;
        }else{
            homens = homens + 1;
        }

    }

    return alert(mulheres + " mulheres e " + homens + " homens responderam ao questionário.");

}

contarSexo();
