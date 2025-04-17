//2. Maior Palavra
//Peça para o usuario digitar uma frase, e retorne a ele a maior palavra, utilizando
//split() e reduce().
const maiorPalavra = frase => 
    frase
      .split(' ')
      .reduce((maior, atual) => atual.length > maior.length ? atual : maior, '');
  
  console.log(maiorPalavra('Aprender a palavra paralelepipedo é divertido'));


