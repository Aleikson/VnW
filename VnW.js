// 01
let dia = 'dia';
if (dia === 'dia') {
    console.log('Está claro.');
} else {
    console.log('Está de noite.');
}

// 02
console.log('Números pares até 20:');
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// 03
function mensagem() {
    console.log('Esta é uma mensagem.');
}
mensagem();

// 04
function exibirNome(nome) {
    console.log('Meu nome é ' + nome);
}
exibirNome('Fulano');

// 05
function informacoes(nome, idade, estiloMusical) {
    console.log('Nome:', nome);
    console.log('Idade:', idade);
    console.log('Estilo Musical Preferido:', estiloMusical);
}
informacoes('Fulano', 25, 'Rock');

// 06
function filmeEMusica(filme, musica) {
    console.log('Filme:', filme);
    console.log('Música:', musica);
}
filmeEMusica('Inception', 'Bohemian Rhapsody');

// 07
function triploNumero(numero) {
    return numero * 3;
}
console.log('Triplo de 5:', triploNumero(5));

// 08
function verificarBooleano(valor) {
    if (valor === true) {
        console.log('É verdadeiro.');
    } else if (valor === false) {
        console.log('É falso.');
    } else {
        console.log('Valor não é booleano.');
    }
}
verificarBooleano(true);

// 09
let array = ['item1', 'item2', 'item3', 'item4', 'item5'];
console.log(array);

// 10
array.unshift('NovoItem');
console.log(array);

// 11
array.pop();
console.log('último item removido:', array);

// 12
array.push('NovoItem1', 'NovoItem2');
console.log('itens no fim:', array);

// 13
array.shift();
console.log('primeiro item removido:', array);

// 14
array.splice(2, 0, 'NovoItemNoMeio');
console.log(array);

// 15
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
console.log('Array original:', numbers);
numbers.sort((a, b) => a - b);
console.log('Array ordenado em ordem crescente:', numbers);
