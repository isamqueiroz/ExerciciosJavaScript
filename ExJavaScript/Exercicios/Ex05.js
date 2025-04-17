//5. Limpar Espaços Dobrados
//Crie uma função que remove espaços repetidos de uma frase (ex: &quot;Olá mundo bonito&quot;
//→ &quot;Olá mundo bonito&quot;), usando split(), filter() e join().

const limparEspacos = frase => {
    return frase
      .split(" ")                    
       // Dividimos a frase por espaços
      .filter(palavra => palavra !== "") 
      // Removemos os vazios (espaços extras)
      .join(" ");                 
         // Junta de volta com um único espaço
  };
  
  // Exemplo de uso
  let frase = "Olá   mundo    bonito";
  let fraseLimpa = limparEspacos(frase);
  console.log("Frase limpa:", fraseLimpa);