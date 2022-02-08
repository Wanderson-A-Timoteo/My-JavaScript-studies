function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

const pessoa1 = {
  nome: "Maria",
  idade: 30,
};

const pessoa2 = {
  nome: "João",
  idade: 25,
};

const animal = {
  nome: "Fiona",
  idade: 5,
  raca: "Pug",
};

// Usando call
// Resultado = Daqui a 10 anos, Fiona terá 15 anos de idade.
console.log(calculaIdade.call(animal, 10));

// Usando Apply
console.log(calculaIdade.apply(pessoa1, [4]));
// Daqui a 4 anos, Maria terá 34 anos de idade.
