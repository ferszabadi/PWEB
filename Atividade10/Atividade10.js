//Exercício 1

function maiorNumero(num1, num2, num3) {
    var maior = ((num1 > num2) ? num1 : num2);
    if (num3 > maior) {
        alert("O maior número é: " + num3);
    } else {
        alert("O maior número é: " + maior);
    }
}

maiorNumero(20, 10, 30);

//Exercício 2

function ordemCrescente(num1, num2, num3) {
    var numeros = [num1, num2, num3];
    alert("A ordem crescente é: " + numeros.sort(function (a, b) { return a - b }));
}

ordemCrescente(100, 87, 5);

//Exercício 3

function palindromo(string) {

    string = string.replace(/[\W_]/g, '');
    string = string.toUpperCase();
    var i = string.split("").reverse().join("");

    if (string === i) {
        alert("É palíndromo.");
    } else {
        alert("Não é palíndromo.");
    }
}

palindromo("A base do teto desaba");

//Exercício 4

function triangulo(a, b, c) {
    if ((Math.abs(b - c) < a && a < (b + c)) && (Math.abs(a - c) < b && b < (a + c)) && (Math.abs(a - b) < c && c < (a + b))) {
        if ((a == b) && (a == c)) {
            alert("É um triângulo equilátero.");
        } else if ((a == b) || (a == c) || (b == c)) {
            alert("É um triângulo isósceles");
        } else {
            alert("É um triângulo escaleno.");
        }
    } else {
        alert("Não é um triângulo");
    }
}

triangulo(4, 5, 3);