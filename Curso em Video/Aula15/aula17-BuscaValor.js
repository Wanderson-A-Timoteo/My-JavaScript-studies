let vetor = [2, 8, 4, 6, 5, 7, 1]

/*  A função indexOF() busca o valor do elemento, NÂO BUSCA A POSIÇÂO, 
    é preciso passar como parametro um valor existente no vetor para ser 
    mostrado a posição dele no vetor
 */
console.log(vetor)
console.log(`O valor indeOf(5) esta na posição: ${vetor.indexOf(5)}`)

console.log('')
vetor.sort()
console.log('')
console.log('Vetor ordenado')
console.log(vetor)
console.log(`O valor indeOf(5) esta na posição: ${vetor.indexOf(5)}`)