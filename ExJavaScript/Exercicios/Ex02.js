//2. Maior Palavra
//Peça uma frase e crie uma função que retorna a maior palavra da frase usando
//split() e reduce().
const maiorPalavra = frase => 
    frase
      .split(' ')
      .reduce((maior, atual) => atual.length > maior.length ? atual : maior, '');
  
  console.log(maiorPalavra('Aprender a palavra paralelepipedo é divertido'));


