// Função para inverter uma string
function inverterString(str) {
    // Usa o método split() para separar a string em um array, o método reverse() para inverter e join() para juntar novamente
    let stringInvertida = str.split('').reverse().join('');
    console.log(`A string invertida é: ${stringInvertida}`);
  }
  
  // Solicita a string ao usuário
  let str = prompt("Digite uma string para inverter:");
  
  // Chama a função para inverter a string
  inverterString(str);
  