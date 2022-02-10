// EXEMPLOS DE ERROS

// const NovoErro = new Error();

// NovoErro.name = "Novo Erro";

// NovoErro.message = "Este erro nunca ocorreu";
// console.log(NovoErro);

function validaArray(arr, tamanho) {
  try {
    if (!arr.length || arr.length !== tamanho)
      throw new RangeError("O tamanho do array é inválido");

    return arr;
  } catch (e) {
    if (e instanceof RangeError) {
      return console.log(e.message);
    } else {
      return e;
    }
  }
}

console.log(validaArray());
