// Função para verificar se o número é primo
function verificarPrimo(numero) {
    // Caso o número seja menor que 2, ele não é primo
    if (numero < 2) {
      console.log(`${numero} não é um número primo.`);
      return;
    }
  
    // Verifica se o número é divisível por algum número entre 2 e a raiz quadrada de 'numero'
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        console.log(`${numero} não é um número primo.`);
        return;
      }
    }
  
    // Se o número não for divisível por nenhum número entre 2 e a raiz quadrada, ele é primo
    console.log(`${numero} é um número primo.`);
  }
  
  // Solicita um número ao usuário
  let numero = parseInt(prompt("Digite um número para verificar se é primo:"));
  
  // Chama a função para verificar se o número é primo
  verificarPrimo(numero);
  