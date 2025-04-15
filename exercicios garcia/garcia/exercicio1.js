// Função para verificar se o número é par ou ímpar
function verificarParOuImpar(numero) {
    // Verifica se o número é divisível por 2
    if (numero % 2 === 0) {
      console.log(`${numero} é um número par.`);
    } else {
      console.log(`${numero} é um número ímpar.`);
    }
  }
  
  // Solicita um número ao usuário
  let numero = parseInt(prompt("Digite um número:"));
  
  // Chama a função para verificar se o número é par ou ímpar
  verificarParOuImpar(numero);
  