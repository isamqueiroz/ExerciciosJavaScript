//14. Reorganizar Data
//Receba uma data no formato &quot;2025-04-15&quot; e transforme para &quot;15/04/2025&quot; usando
//split() e reverse().

// Função para reorganizar a data de "YYYY-MM-DD" para "DD/MM/YYYY"
const reorganizarData = data => {
    // Usa o split() para dividir a data em um array de partes
    const partes = data.split("-"); 
  
    // Reorganiza a data usando reverse() para inverter as partes e join() para criar a nova string
    return partes.reverse().join("/"); 
  };
  
  // Exemplo de uso com uma data no formato "YYYY-MM-DD"
  let dataOriginal = "2025-04-15"; // Data de exemplo
  let dataFormatada = reorganizarData(dataOriginal); // Chama a função para reorganizar a data
  console.log(dataFormatada); // Exibe a data no formato "DD/MM/YYYY"