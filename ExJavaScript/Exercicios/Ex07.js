//7. Contador de Dígitos em uma String
//Peça um texto e retorne quantos dígitos numéricos ele contém usando split() e
//filter() com isNaN().

const contarDigitos = texto => {
    return texto
      .split("") // Separa cada caractere
      .filter(caractere => !isNaN(caractere) && caractere !== " ") // Filtra apenas os dígitos
    // o que é o !isNan ?  
    // isNaN significa "is Not a Number", ou seja, "não é um número?".
    //Se você passar um valor pra ele, ele vai te dizer se esse valor NÃO é um número.
    //não for número, ele retorna true.
    //Se for número, ele retorna false.
      .length;
       // Conta quantos são
  };
  
  // Exemplo de uso com prompt
  let texto = prompt("Digite um texto:");
  let totalDigitos = contarDigitos(texto);
  console.log("Quantidade de dígitos:", totalDigitos);