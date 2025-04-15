// Função para verificar se o número é positivo, negativo ou zero
function verificarNumero(numero) {
    if (numero > 0) {
      console.log(`${numero} é um número positivo.`);
    } else if (numero < 0) {
      console.log(`${numero} é um número negativo.`);
    } else {
      console.log(`${numero} é zero.`);
    }
  }
  
  // Solicita um número ao usuário
  let numero = parseFloat(prompt("Digite um número:"));
  
  // Chama a função para verificar o tipo do número
  verificarNumero(numero);
  