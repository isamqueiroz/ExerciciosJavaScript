//11. Formatação de Preço
//Crie uma função que recebe um número e retorna formatado em real (R$), com duas
//casas decimais e vírgula no lugar do ponto. Ex: 10.5 → R$ 10,50. Use toFixed() e
//replace().


// Função para formatar um número como preço em Real (R$)
const formatarPreco = numero => {
    // Usando toFixed(2) para garantir duas casas decimais
    // e replace() para substituir o ponto por vírgula
    return "R$ " + numero.toFixed(2).replace(".", ",");
  };
  
  // Exemplo de uso com prompt
  let preco = parseFloat(prompt("Digite um valor:")); // Solicita ao usuário um número
  let precoFormatado = formatarPreco(preco); // Chama a função para formatar o preço
  console.log(precoFormatado); // Exibe o preço formatado