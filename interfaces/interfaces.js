"use strict";
function saudar(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Amaral';
}
const pessoa = {
    nome: 'Jorge',
    idade: 42,
    comunicar(sobrenome) {
        console.log(`Ola, eu sou o ${this.nome} ${sobrenome}`);
    }
};
saudar(pessoa);
mudarNome(pessoa);
saudar(pessoa);
//saudar({nome: 'Pedro', idade: 24, vip: false})
pessoa.comunicar('Firmino');
// USANDO CLASSES
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    comunicar(sobrenome) {
        console.log(`Ola, eu sou o ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Alfredo';
saudar(meuCliente);
meuCliente.comunicar('Elton');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    console.log(base ** exp);
    return base ** exp;
};
potencia(3, 2);
