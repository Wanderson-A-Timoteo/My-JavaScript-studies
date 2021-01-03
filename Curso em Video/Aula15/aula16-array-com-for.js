let valores = [8, 1, 3, 5, 9, 6, 4]

// Sem formatação
console.log(valores)

// Mostrando o valor de cada posição do vetor
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])


// Mostrando o valor de cada posição do vetor com laço de repetição FOR
for (let pos = 0; pos < valores.length; pos++){
    console.log(`FOR SEM ORDENAÇÂO - A posição ${pos} tem o valor ${valores[pos]}`)
}

// Ordenando o vetor em forma crescente
let crescente = valores.sort()
console.log('')
console.log(`Vetor ordenado: ${crescente}`)
console.log('')


// Mostrando o valor de cada posição do vetor com laço de repetição FOR
for (let pos = 0; pos < valores.length; pos++){
    console.log(`FOR ORDENADO - A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log('')
console.log('Simplificando o código utilizando FOR IN')

// FOR IN
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}