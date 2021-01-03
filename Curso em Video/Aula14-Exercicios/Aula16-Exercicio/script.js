function contar() {

    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var resultado = document.getElementById('resultado')


    if ( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        
        //window.alert(' [ERROR] Verifique os dados e tente novamente! ')
        resultado.innerHTML = 'Impossível contar!'
        
    } else {
        resultado.innerHTML = `Contando: <br>`

        let ini = Number(inicio.value)
        let fi = Number(fim.value)
        let pas = Number(passo.value)

        if( pas <= 0 ){
            window.alert(' [ERROR] Passo inválido! Considerando PASSO 1')
            pas = 1
        }

        if (ini < fi ) { //Compara se o valor de inicio é menor que o valor de fim
            // Se valor de inicio é menor que de fim 

            // Contagem crescente
            for (let c = ini; c <= fi; c += pas) {
                resultado.innerHTML += `${c} \u{1F449}` //emoji: http://unicode.org/emoji/charts/full-emoji-list.html
            }
            
        } else {

            // Contagem decrescente
            for (let c = ini; c >= fi; c -= pas) {
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
        
    }   
        
}