//8. Remover Caracteres Especiais
//Crie uma função que recebe um texto e remove todos os caracteres que não são letras
//ou números, usando replace() com regex.

const removerEspeciais = texto => {
    return texto.replace(/[^a-zA-Z0-9]/g, "");
  };
  
  // Exemplo de uso com prompt
  let texto = prompt("Digite um texto com símbolos:");
  let textoLimpo = removerEspeciais(texto);
  console.log("Texto sem caracteres especiais:", textoLimpo);

  //.../g: é o formato da expressão regular (g é pra aplicar em tudo, não só no primeiro).
  //[^...]: o ^ dentro dos colchetes significa "tudo que não está aqui dentro".
  //a-zA-Z0-9: são as letras minúsculas, maiúsculas e os números.
  //Então, essa regex remove tudo que não é letra ou número (como !@#$%, espaço, acentos, etc).