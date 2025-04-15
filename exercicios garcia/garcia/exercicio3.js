// Função para calcular a soma dos números de 1 até N
function somarNumerosAteN(N) {
    let soma = 0;
  
    // Laço para somar todos os números de 1 até N
    for (let i = 1; i <= N; i++) {
      soma += i;
    }
  
    console.log(`A soma dos números de 1 até ${N} é: ${soma}`);
  }
  
  // Solicita um número ao usuário
  let N = parseInt(prompt("Digite um número N:"));
  
  // Chama a função para calcular a soma
  somarNumerosAteN(N);
  