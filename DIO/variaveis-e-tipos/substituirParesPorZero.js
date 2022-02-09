/*

    Verificar se existe numeros pares no array e substituir por zero

*/

function substituirPares(array) {
  if (!array) return -1;
  if (!array.length) return -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      console.log("Você já é zero!!");
    } else if (array[i] % 2 === 0) {
      console.log(`Substituindo ${array[i]} por zero...`);
      array[i] = 0;
    }
  }

  return array;
}

let arr = [1, 3, 4, 6, 8, 9, 10, 33, 44, 50];
console.log(substituirPares([arr]));
