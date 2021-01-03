// Os parametros passos em console.log são inseridos na função e retona a soma dos elementos
function soma (n1, n2) {
    return n1 + n2
}
console.log(soma(7, 9))

// Se passarmos apenas um parametro dará erro NaN
function somar (n3, n4) {
    return n3 + n4
}
console.log(somar(7))

// Para não gerar erro por falta de parametro podemos definir um valor para os elementos
function somarnum (n5=0, n6=0) {
    return n5 + n6
}
console.log(somarnum(7))