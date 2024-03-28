nome = prompt("Digite o nome do aluno:");
nota1 = prompt("Digite a primeira nota:");
nota2 = prompt("Digite a segunda nota:");
nota3 = prompt("Digite a terceira nota:");

alert("A média do aluno " + nome + " é: " + ((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3).toFixed(2));