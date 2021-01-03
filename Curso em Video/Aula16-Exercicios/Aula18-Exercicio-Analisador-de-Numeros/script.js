
let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let array = []

// Função verifica se o número é entre 1 e 100
function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Função verifica se o número (n) já esta adicionado na lista, utilizando a função indexOf() 
function inLista(n, lis) {
    if (lis.indexOf(Number(n)) != -1){ // -1 indica que o numero não foi encontrado na lista
        return true
    } else {
        return false
    }
}

function adicionar() {
    // Se o número for realmente um número (isNumero(num.value) && o número não esta na lista !inLista(num.value, array)
    if (isNumero(num.value) && !inLista(num.value, array)) {
        
        // Adicionando os números com a função push, mas não aparece na tabela, 
        // para isso é preciso criar um option no select
        array.push(Number(num.value))

        // Adicionando os valores no select, utilizando option
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)

        // Quando consegue adicionar o elemento, esta função limpa o resultado
        res.innerHTML = ''

    } else {
        window.alert('[ERROR] Número inválido ou já encontrado na lista!')
        
    }
    // Limpa o número digitado
    num.value = ''

    // Deixa o cursor piscando para digitar novo número
    num.focus()   
}

function finalizar() {
    // A função length verifica a quantidade de elementos no array
    if (array.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = array.length
        let maior = array[0]
        let menor = array[0]
        let soma = 0
        let media = 0

        // Neste laço percorre todo o array e verifica os valores de cada elemento
        for (let pos in array) {
            soma += array[pos] // soma todos os valores dos elementos

            // Compara cada elemento do array e Adiciona o maior elemento na variavel maior
            if (array[pos] > maior)
                maior = array[pos]
            // Compara cada elemento do array e Adiciona o menor elemento na variavel menor 
            if (array[pos] < menor)
                menor = array[pos] 
        }

        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi: ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi: ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é: ${soma}</p>`
        res.innerHTML += `<p>A media da soma de todos os valores é: ${media}</p>`




    }
}