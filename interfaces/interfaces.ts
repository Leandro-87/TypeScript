interface User {
    nome: string
    idade?: number // ? pode existir ou nao
    [prop: string]: any
    comunicar(sobrenome: string): void
}

function saudar(pessoa: User){
    console.log('Olá, ' + pessoa.nome)
}

function mudarNome(pessoa: User) {
    pessoa.nome = 'Amaral'
}

const pessoa: User = {
    nome: 'Jorge',
    idade: 42,
    comunicar(sobrenome: string){
        console.log(`Ola, eu sou o ${this.nome} ${sobrenome}`)
    }
}

saudar(pessoa)
mudarNome(pessoa)
saudar(pessoa)
//saudar({nome: 'Pedro', idade: 24, vip: false})
pessoa.comunicar('Firmino')

// USANDO CLASSES

class Cliente implements User {
    nome: string = ''
    ultimaCompra: Date = new Date
    comunicar(sobrenome: string) {
        console.log(`Ola, eu sou o ${this.nome} ${sobrenome}`)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Alfredo'
saudar(meuCliente)
meuCliente.comunicar('Elton')
console.log(meuCliente.ultimaCompra)

// Interface Funcao
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base:number, exp: number): number {
    console.log(base ** exp)
    return base ** exp
}

potencia(3, 2)