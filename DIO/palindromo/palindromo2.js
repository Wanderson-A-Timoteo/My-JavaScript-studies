/*

 Palindromo são palavras que tem o mesmo sentido quando estrito de tras pra frente ou seja, de forma invertida. Exemplo: ovo, ana, ama, entre outras.

*/

// Solução 2
function verificaPalindromo(string) {
  // Verifica se NÂO existe uma string, se é diferente de true ela return e sai da função
  if (!string) return "Sem string, por favor, digite uma palavra";

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(verificaPalindromo("ovo"));
