//12. Sorteador de Nomes
//Peça uma lista de nomes separados por vírgula e sorteie um aleatoriamente usando
//split() e Math.random().

// Função para sortear um nome aleatoriamente a partir de uma lista de nomes
const sortearNome = lista => {
    // Divide a string de nomes usando a vírgula como separador e cria um array
    const nomes = lista.split(","); 
  
    // Gera um índice aleatório entre 0 e o tamanho da lista (número de nomes)
    const indiceAleatorio = Math.floor(Math.random() * nomes.length); 
  
    // Retorna o nome sorteado
    return nomes[indiceAleatorio].trim(); // 'trim()' remove espaços extras no início ou fim
  };
  
  // Exemplo de uso com prompt
  let listaDeNomes = prompt("Digite uma lista de nomes separados por vírgula:"); 
  let nomeSorteado = sortearNome(listaDeNomes); // Chama a função para sortear um nome
  console.log(`O nome sorteado é: ${nomeSorteado}`); // Exibe o nome sorteado