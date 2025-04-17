//13. Filtrar Palavras por Tamanho
//Crie uma função que recebe um array de palavras e retorna apenas as que têm mais de 5
//letras, usando filter().

// Função para filtrar palavras com mais de 5 letras
const filtrarPalavrasLongas = palavras => {
    // Usa o método filter() para criar um novo array com palavras que têm mais de 5 letras
    return palavras.filter(palavra => palavra.length > 5); 
  };
  
  // Exemplo de uso com um array de palavras
  let palavras = ["casa", "bicicleta", "banana", "sol", "programacao", "flor"];
  let palavrasLongas = filtrarPalavrasLongas(palavras); // Filtra as palavras com mais de 5 letras
  console.log(palavrasLongas); // Exibe o array filtrado