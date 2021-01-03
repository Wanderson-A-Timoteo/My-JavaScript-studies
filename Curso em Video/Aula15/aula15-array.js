let num = [5, 8, 9, 3, 2]
console.log(`Vetor: ${num}`)

// A função push() acrescenta um elemento no final do vetor
num.push(1)
console.log(`Vetor com a função push(1) acrescenta um elemento no final do vetor: ${num}`)

//O vetor com a função length() conta as posições do vetor 
let vetor = num.length 
//console.log(`O vetor tem ${num.length} posições`)
console.log(`O vetor com a função length() conta as posições do vetor: ${vetor} posições`)

// num[0] mostra o valor da posição 0 no vetor
console.log(`O primeiro valor do vetor é: ${num[0]}`)
console.log(`O segundo valor do vetor é: ${num[1]}`)
console.log(`O terceiro valor do vetor é: ${num[2]}`)
console.log(`O quarto valor do vetor é: ${num[3]}`)


// A função sort() ordena o vetor em ordem crescente
num.sort()
console.log(`O vetor ordenado com a função sort() é: ${num}`)