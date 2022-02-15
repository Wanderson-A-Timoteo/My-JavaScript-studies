/*

Filtre e retorne todos os números pares de um array.

*/

function filtraImpares(arr) {
  return arr.filter(callback);
}

function callback(item) {
  return item % 2 !== 0; //Filtra adicionando ao array apenas os numeros que NÂO tem resto igual a 0.
}

const meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(filtraImpares(meuArray));
