//6. Primeira Letra Maiúscula
//Peça uma frase e retorne cada palavra com a primeira letra maiúscula. Use split(),
//map(), toUpperCase() e slice().


const capitalizarFrase = frase => {
    return frase
      .split(" ") 
      // Divide a frase em palavras
      .map(palavra => 
        palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()
      ) // Coloca a primeira letra maiúscula e o resto minúsculo
      .join(" ");
       
  };
  
  // Exemplo de uso com prompt
  let frase = prompt("Digite uma frase:");
  let fraseFormatada = capitalizarFrase(frase);
  console.log("Frase formatada:", fraseFormatada);