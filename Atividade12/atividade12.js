//Exercício 01

function Retangulo(base, altura){
    this.base = base;
    this.altura = altura;
    this.CalculaArea = function(){
        return this.base * this.altura;
    }
}

var area = new Retangulo(prompt("Informe o valor da base: "), prompt("Informe o valor da altura: "));
alert("Cálculo da área: " + area.CalculaArea());

//Exercício 02

class Conta {
    constructor(){
        this._nomeCorrentista;
        this._banco;
        this._numConta;
        this._saldo;
    }
    setNome(value){
        this._nomeCorrentista = value;
    }
    getNome(){
        return this._nomeCorrentista;
    }
    setBanco(value){
        this._banco = value;
    }
    getBanco(){
        return this._banco;
    }
    setnumConta(value){
        this._numConta = value;
    }
    getnumConta(){
        return this._numConta;
    }
    setSaldo(value){
        this._saldo = value;
    }
    getSaldo(){
        return this._saldo;
    }
}

class Corrente extends Conta{
    constructor(){
        super();
        this._saldoEspecial;
    }
    setSaldoEspecial(value){
        this._saldoEspecial = value;
    }
    getSaldoEspecial(){
        return this._saldoEspecial;
    }
}

class Poupanca extends Conta{
    constructor(){
        super();
        this._juros;
        this._dataVenc;
    }
    setJuros(value){
        this._juros = value;
    }
    getJuros(){
        return this._juros;
    }
    setDataVenc(value){
        this._dataVenc = value;
    }
    getDataVenc(){
        return this._dataVenc;
    }
}

var nomeCorrentista1 = prompt("Informe o nome: ");
var bancoCorrentista1 = prompt("Informe o banco: ");
var numContaCorrentista1 = prompt("Informe o número da conta: ");
var saldoCorrentista1 = prompt("Informe o saldo: ");
var saldoEspecialCorrentista1 = prompt("Informe o saldo especial: ");

var objCorrente = new Corrente();
    objCorrente.setNome(nomeCorrentista1);
    objCorrente.setBanco(bancoCorrentista1);
    objCorrente.setnumConta(numContaCorrentista1);
    objCorrente.setSaldo(saldoCorrentista1);
    objCorrente.setSaldoEspecial(saldoEspecialCorrentista1);
    alert(`
    Nome: ${objCorrente.getNome()}
    Banco: ${objCorrente.getBanco()} 
    Número da conta: ${objCorrente.getnumConta()}
    Saldo: ${objCorrente.getSaldo()} 
    Saldo Especial: ${objCorrente.getSaldoEspecial()}
    `);

var nomePoupancista = prompt("Informe o nome: ");
var bancoPoupancista = prompt("Informe o banco: ");
var numContaPoupancista = prompt("Informe o número da conta: ");
var saldoPoupancista = prompt("Informe o saldo: ");
var jurosPoupancista = prompt("Informe a taxa de juros: ");
var dataVencPoupancista = prompt("Informe a data de vencimento: ");

var objPoupanca = new Poupanca();
    objPoupanca.setNome(nomePoupancista);
    objPoupanca.setBanco(bancoPoupancista);
    objPoupanca.setnumConta(numContaCorrentista1);
    objPoupanca.setSaldo(saldoPoupancista);
    objPoupanca.setJuros(jurosPoupancista);
    objPoupanca.setDataVenc(dataVencPoupancista);
    alert(`
    Nome: ${objPoupanca.getNome()}
    Banco: ${objPoupanca.getBanco()} 
    Número da conta: ${objPoupanca.getnumConta()}
    Saldo: ${objPoupanca.getSaldo()} 
    Juros: ${objPoupanca.getJuros()}
    Data de vencimento: ${objPoupanca.getDataVenc()}
    `);