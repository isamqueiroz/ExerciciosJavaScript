//10. Contar Ocorrências de Palavras
//Peça uma frase e retorne a palavra que mais se repete. Use split(), reduce() e um
//objeto como contador.

// Função que encontra a palavra que mais se repete em uma frase
const palavraMaisFrequente = frase => {
    // Divide a frase em palavras e transforma todas as palavras em minúsculas
    const palavras = frase.toLowerCase().split(" "); 
  
    // Usando o reduce() para contar a frequência de cada palavra
    const contagem = palavras.reduce((acc, palavra) => {
      // Se a palavra já existe no objeto 'acc', soma 1 à contagem; senão, inicia com 1
      acc[palavra] = (acc[palavra] || 0) + 1; 
      return acc; // Retorna o objeto atualizado com as contagens
    }, {}); // Inicializa o acumulador como um objeto vazio
  
    // Variáveis para armazenar a palavra mais repetida e sua contagem
    let maisRepetida = "";
    let maiorContagem = 0;
  
    // Intera pelas palavras no objeto 'contagem' para encontrar a mais repetida
    for (let palavra in contagem) {
      // Se a contagem da palavra atual for maior que a maior contagem registrada
      if (contagem[palavra] > maiorContagem) {
        maisRepetida = palavra; 
        // Atualiza a palavra mais repetida
        maiorContagem = contagem[palavra]; 
        // Atualiza a maior contagem
      }
    }
  
    // Retorna a palavra que mais se repete
    return maisRepetida;
  };
  
  // Exemplo de uso com prompt
  let frase = prompt("Digite uma frase:");
   // Solicita uma frase ao usuário
  let resultado = palavraMaisFrequente(frase);
   // Chama a função passando a frase
  console.log(`A palavra que mais se repete é: "${resultado}"`);
   // Exibe a palavra mais repetida

