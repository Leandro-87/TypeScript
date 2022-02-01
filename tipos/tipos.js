"use strict";
// AÇÕES INVALIDAS VAO ESTAO COMENTADO DENTRO DO BLOCO DE CODIGO
// TS aceita troca de valor como JS mas nao de tipo
let nome = 'Charles';
nome = "Renata";
// nome = 25
console.log(nome);
//number
let idade = 25;
idade = 25.4;
// idade = 'vinte e cinco'
console.log(idade);
// Boolean
let trabalha = true;
// trabalha =  1
console.log('trabalha:', trabalha);
// Se iniciar sem valor pode mudar o tipo
let sobre;
sobre = 'Posso ser string, number ou boolean';
console.log(`${sobre} -> Sou: ${typeof (sobre)}`);
sobre = 4198;
console.log(`${sobre} -> Sou: ${typeof (sobre)}`);
sobre = true;
console.log(`${sobre} -> Sou: ${typeof (sobre)}`);
// ARRAY: se usar o : any[] pode ser alterado para qualquer tipo de array
let hobbies = [1, 2, 3, 4, 5, 6];
hobbies = ['Academia', 'Video-game', 'Musica'];
console.log(hobbies);
console.log(typeof hobbies);
// TUPLA
let endereco = ["Alameda das Ortencias", 'Vista Alegra', 5.87];
console.log(endereco);
endereco = ['Luiz Bonetti', 'Perdizes 2', 7.25];
console.log(endereco);
// ENUMS
var Cor;
(function (Cor) {
    Cor[Cor["verde"] = 0] = "verde";
    Cor[Cor["branco"] = 1] = "branco";
    Cor[Cor["vermelho"] = 100] = "vermelho";
})(Cor || (Cor = {}));
console.log(Cor);
console.log(Cor[0], Cor.branco, Cor[100]);
// Any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2021, cor: 'Branco' };
console.log(carro);
console.log(carro.cor);
