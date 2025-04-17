//9. Verificar Palíndromo com Funções
//Crie uma função que verifica se uma palavra é palíndroma usando split(), reverse()
//e join().

const ehPalindromo = palavra => {
    let invertida = palavra.split("").reverse().join("");
    return palavra === invertida;
  };
  
  //split(""): divide a palavra em letras.
//reverse(): inverte a ordem das letras.
//join(""): junta as letras novamente numa string.
//Depois é só comparar a original com a invertida.

  // Exemplo com prompt
  let palavra = prompt("Digite uma palavra:");
  if (ehPalindromo(palavra)) {
    console.log(`"${palavra}" é um palíndromo!`);
  } else {
    console.log(`"${palavra}" não é um palíndromo.`);
  }