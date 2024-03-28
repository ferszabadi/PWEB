num1 = prompt("Digite um número:");
num2 = prompt("Digite outro número:");

soma = parseFloat(num1) + parseFloat(num2);
subtracao = parseFloat(num1) - parseFloat(num2);
produto = parseFloat(num1) * parseFloat(num2);
divisao = parseFloat(num1) / parseFloat(num2);
resto = parseFloat(num1) % parseFloat(num2);

alert("Os números digitados foram " + num1 + " e " + num2 + "."
+ "\nA soma dos dois é " + soma + "."
+ "\nA subtração do primeiro pelo segundo é " + subtracao + "."
+ "\nO produto dos dois é " + produto + "."
+ "\nA divisão do primeiro pelo segundo é " + divisao.toFixed(2) + "."
+ "\nO resto da divisão do primeiro pelo segundo é " + resto + "."
);