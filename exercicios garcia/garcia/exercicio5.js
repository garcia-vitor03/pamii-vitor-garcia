// Função para contar quantas vezes uma letra aparece em uma palavra
function contarOcorrencias(palavra, letra) {
    let contador = 0;
  
    // Laço para percorrer cada caractere da palavra
    for (let i = 0; i < palavra.length; i++) {
      if (palavra[i].toLowerCase() === letra.toLowerCase()) {
        contador++;
      }
    }
  
    console.log(`A letra "${letra}" aparece ${contador} vez(es) na palavra "${palavra}".`);
  }
  
  // Solicita a palavra e a letra ao usuário
  let palavra = prompt("Digite uma palavra:");
  let letra = prompt("Digite uma letra para contar suas ocorrências:");
  
  // Chama a função para contar as ocorrências da letra
  contarOcorrencias(palavra, letra);
  