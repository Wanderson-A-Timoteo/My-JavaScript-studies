/*

Reduce
Some todos os números de um array

*/

const arr = [1, 2];

function somaNumeros1(arr) {
  return arr.reduce(function (prev, current) {
    return prev + current;
  });
}

console.log(somaNumeros1(arr)); // Retorna apenas a soma entre 1 + 2 = 3, sem

function somaNumeros(arr) {
  return arr.reduce(function (prev, current) {
    console.log({ prev });
    console.log({ current });
    return prev + current;
  }, 0);
}

console.log(somaNumeros(arr)); // retorna o objeto prev e current e a soma entre eles
