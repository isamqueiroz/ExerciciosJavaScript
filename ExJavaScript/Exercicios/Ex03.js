//3. Contar Palavras com Letra Inicial
//Peça uma frase e uma letra, e retorne quantas palavras começam com essa letra (ex:
// &#39;a&#39;). Use split(), startsWith() e filter().


var prompt = require('prompt-sync')();


//aqui, eu estou adicionando a frase e a letra
let frase = prompt("Digite uma frase:")
let letra = prompt("Digite uma letra:");

//ja aqui, eu estou eparando a frase da letra
let palavras = frase.split(" ");
let palavrasComLetra = palavras.filter(palavra => palavra.toLowerCase().startsWith(letra.toLowerCase()));

//para que serve o .filter e o .starwith?
// o filter filtra as palavras que começam com a letra que queremos.
// o starwith verifica se a palavra começa com a letra que pedimos.

//o resultado daquilo que pedimos
console.log("Número de palavras que começam com '${letra}': ${palavrasComLetra.length}");
