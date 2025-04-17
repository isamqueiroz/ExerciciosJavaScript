//4. Gerador de Senhas Aleatórias
//Crie uma função que gera uma senha de 10 caracteres com letras, números e símbolos
//usando Math.random(), charCodeAt() e String.fromCharCode().

//aqui, estou especificando o tamanho da senha
const gerarSenha = (tamanho = 10) => {
    let caracteres = "";
  
    // esse, é para as letras maiúsculas
    for (let i = 65; i <= 90; i++) caracteres += String.fromCharCode(i);
    // esse, é para as letras minúsculas
    for (let i = 97; i <= 122; i++) caracteres += String.fromCharCode(i);
    // esse, é para os Números
    for (let i = 48; i <= 57; i++) caracteres += String.fromCharCode(i);
    // esse, é para os Símbolos
    caracteres += "!@#$%^&*()_+[]{}<>?";
  
    return Array.from({ length: tamanho }, () =>
      caracteres.charAt(Math.floor(Math.floor() * caracteres.length))

    //o que é charAT, Math.floor ?
    // Usamos Math.random() para escolher caracteres aleatórios.
    // O método charAt() retorna o caractere especificado a partir de uma string.
    ).join("");
  };
  
  // Mostra a senha no console
  console.log("Senha gerada:", gerarSenha());