const vetor = ['10', '20', '30']
// Converter vetor de strings em inteiro
const stringToInt = x => parseInt(x)
// Criar novo vetor que receberá os valores convertidos para inteiros
const novoVetor = vetor.map(stringToInt)
console.log(novoVetor)
