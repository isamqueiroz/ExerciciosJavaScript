//15. Verificação de Email Simples
//Crie uma função que verifica se um texto contém &quot;@&quot; e &quot;.&quot;, retornando se é um e-mail
//válido ou inválido. Use includes() e indexOf().

// Função para verificar se um texto é um e-mail válido
const verificarEmail = texto => {
    // Verifica se o texto contém o caractere '@' e o caractere '.'
    if (texto.includes("@") && texto.includes(".")) {
      // Usa indexOf para garantir que o '@' venha antes do '.' (mais uma verificação)
      if (texto.indexOf("@") < texto.indexOf(".")) {
        return "E-mail válido"; // Retorna "E-mail válido" se as condições forem atendidas
      } else {
        return "E-mail inválido"; // Se o '@' estiver depois do '.', retorna inválido
      }
    }
    return "E-mail inválido"; // Retorna "E-mail inválido" se faltar '@' ou '.'
  };
  
  // Exemplo de uso com prompt
  let email = prompt("Digite um e-mail:");
  let resultado = verificarEmail(email); // Chama a função para verificar o e-mail
  console.log(resultado); // Exibe o resultado da verificação