// Exercicio para retornar os numeros de um array sem repetir os numeros

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
  const mySet = new Set(arr);

  // Usando spred que são os 3 pontinhos para criar um array
  return [...mySet];
}

console.log(valoresUnicos(meuArray));
