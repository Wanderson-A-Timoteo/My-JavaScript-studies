/*

 Palindromo são palavras que tem o mesmo sentido quando estrito de tras pra frente ou seja, de forma invertida. Exemplo: ovo, ana, ama, entre outras.

*/

// Solução simples, para uma palavra e sem comparação se existe espaços
function verificaPalindromo(string) {
  // Verifica se NÂO existe uma string, se é diferente de true ela return e sai da função
  if (!string) return "Sem string, por favor, digite uma palavra";

  // Agora se a string existe, entra nesta função
  // split() separa todas as letras, e retorna um array com todos os caracteres
  // reverse() vai inverter todos os caracteres para colocar a palavra ao contrario
  // join() junta todos os caracteres separados para formar uma palavra
  // Então fazer a compáração da string invertida com a string recebida originalmente para saber se são iguais
  return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ama"));
