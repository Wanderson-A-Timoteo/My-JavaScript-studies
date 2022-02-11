/*

Atividade: Conta Bancária
Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

* Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
    - Dentro de ContaBancaria, construa o getter e o setter de saldo;
    - Dentro de ContaBancaria, crie os métodos sacar e depositar;

* Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
    - Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
    - Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;

* Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;

* Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
    - Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.

*/

//Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  //Dentro de ContaBancaria, construa o getter e o setter de saldo;
  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  //Dentro de ContaBancaria, crie os métodos sacar e depositar;
  sacar(valor) {
    // Verifica se existe saldo na conta para sacar
    if (valor > this._saldo) {
      return "Operação negada, saldo insuficiente!";
    }
    this._saldo = this._saldo - valor;

    return this._saldo;
  }

  depositar(valor) {
    // Adiciona salda na conta
    this._saldo = this._saldo + valor;

    return this._saldo;
  }
}

// Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    // A classe pai ContaBancaria vai setar todas as sua propriedades para a ContaCorrente atraves do metodo super()
    super(agencia, numero);
    this.tipo = "corrente"; //Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
    this._cartaoCredito = cartaoCredito;
  }

  // Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(valor) {
    return (this._cartaoCredito = valor);
  }
}

// Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    // A classe pai ContaBancaria vai setar todas as sua propriedades para a ContaPoupanca atraves do metodo super()
    super(agencia, numero);
    this.tipo = "poupança";
  }
}

// Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    // A classe pai ContaBancaria vai setar todas as sua propriedades para a ContaPoupanca atraves do metodo super()
    super(agencia, numero);
    this.tipo = "universitaria";
  }
  sacar(valor) {
    // Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
    if (valor > 500) {
      return "Operação negada, seu limite para saque é de 500 reais";
    }
    this._saldo = this._saldo - valor;
  }
}
