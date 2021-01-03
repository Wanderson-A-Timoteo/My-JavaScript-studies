/*
    5! = 5 x 4 x 3 x 2 x 1 = 120
    Também podemos dizer que 5! é:
    5! = 5 x 4!

    n! = n x (n-1)!
    1! = 1

    Seguindo esse modelo de fatorial temos
*/

//Recursividade
function fatorialRecursivo(num) {
    if (num == 1) {
        return 1
    } else {
        return num * fatorialRecursivo(num - 1)
    }
}
console.log(fatorialRecursivo(7))