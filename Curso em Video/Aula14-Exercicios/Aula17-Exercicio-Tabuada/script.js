function tabuada() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if ( num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        // Converte a String digitada pelo usuario para tipo number
        let n = Number(num.value)
        let c = 1

        // Limpando a tabela de tabuada
        tab.innerHTML = ''

        while ( c <= 10) {
            let item = document.createElement('option')
            item.text = `${ n } x ${ c } = ${ n * c }`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}