# Dados em Javascript

## Tipos de Dados
```
Number
* Infinity
* NaN

String

Boolean

null

undefined

object
* Array

function
```

## Converter 

Números para String

```
String(n)
n.tostring
```

## Formatando Strings

```
var s = 'Javascript' 

'Eu estrou aprendendo s'  -> Não faz interpolação

'Eu estou aprendendo' + s  -> Usa concatenação

`Eu estou aprendendo ${s}` -> Usa template string


s.length  -> informa quantos caracteres a string tem

s.toUpperCase()  -> tudo para letras MAIUSCULA

S.toLowerCase()  -> tudo para letras minusculas
```

## Formatação de numeros

```
n1 = 1454.5

Para formatar com duas casas decimais

n1.toFixed(2) -> Resultado 1545.50

Para formatar mudando o ponto para vircula

n1.toFixed.replace('.', ',')  -> Resultado 1545,50

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

Resultado = R$ 1,545.50

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})

Resultado = US$ 1,545.50

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})
Resultado =  1.545,50
```

## Operadores

```
Aritméticos    |   5 +  2  = 7

Atribuição     |   5 -  2  = 3 

Relacionais    |   5 *  2  = 10

Lógicos        |   5 /  2  = 2.5

Ternários      |   5 %  2  = 1 resto da divisão inteira
               
               |   5 ** 2  = 25 Os 2 * significa 5 ao quadrado 

```

## Ordem de Precedência

```
Aritméticos

()

**

*  /  %  tem a mesma precedência, por isso calcula-se o qual aparecer primeiro

+ 

-

Relacionais 

>  <  >=  <=  ==  !=  tem a mesma precedência, por isso calcula-se o qual aparecer primeiro


Lógicos

!

&&

||

Ternários

? :

Exemplos:

var a = 5 + 3         = 8
var b = a % 5         = 3
var c = 5 * b ** 2    = 45 primeiro ** depois *
var d = 10 - a / 2    = 6  primeiro / depois -
var e = 6 * 2 / d     = 2  os dois tem a mesma precedência, então calcula-se qual aparecer primeiro
var f = b % e + 4 / e = 3  primeiro  % depois / e por ultimo  +


Auto-atribuição

var n = 3  atibuição simples
n = n + 4  -> n = 7  auto-atribuição
n = n - 5
n = n * 4
n = n / 2
n = n ** 2
n = n % 5  

Simplificando a Auto-atribuição
n = n + 4  ficaria n += 4
n = n - 5          n -= 5
n = n * 4          n *= 4
n = n / 2          n /= 2
n = n ** 2         n **= 2
n = n % 5          n %= 5

Simplificando Incremento

x = x + 1   ->   x += 1  ficaria x ++

x = x - 1   ->   x -= 1  ficaria x --
```

## Operadores Relacionais

```
> maior que
< menor que
>= maior ou igual
<= menor ou igual
== igual
!= diferente

Operadores Relacionais, sempre terá o resultado boolean
5 > 2  = true
4 < 3  = false
8 >= 8 = true
8 <= 6 = false 
4 == 4 = true 
5 != 4 = true


Identidade ou Igualdade Restrita

 O Number 5 tem o mesmo valor que 5
5 == 5     -> true

O Number 5 tem o mesmo valor que a string '5'
5 == '5'   -> true

O Number 5 tem o mesmo valor e é do mesmo tipo que a string '5'
5 === '5'  -> false 

O Number 5 tem o mesmo valor e é do mesmo tipo que  Number 5
5 === 5  -> true 
```

### Operadores Lógicos

```
! -> Negação (não)

&& -> conjunção (e)

|| -> disjunção (ou)

------------------------------------
Negação

!true  -> a negação de true é false

!false -> a negação de false é true

------------------------------------
Conjunção = Só me satisfaz se as duas forem verdadeiras

true  && true  -> true
true  && false -> false
false && true  -> false
false && false -> false
-------------------------------------
Disjunção -  Basta um ser verdadeiro para o resultado ser verdadeiro

true  || true  -> true
true  || false -> true
false || true  -> true
false || false -> false
--------------------------------------

Quando temos operadores lógicos, relacionais e aritimeticos, a ordem de precedência é:

Primeiro os aritmeticos

Segundo os relacionais 

terceiro os lógicos

Exemplo:
var a = 5
var b = 8

a > b && b % 2 == 0  -> false

(a > b) && (b % 2 == 0)
5 > 8 =     -> false
8 % 2 == 0  -> true

false && true -> false


a <= b || b / 2 == 2  -> true

(5 <= 8)    -> true
(8 /2 = 2)  -> false

true || false -> true
```

### Operador tTrnário

teste ? true : false

média >= 7.0 ? "Aprovado" : "Reprovado"


Exemplo:

var media = 5.5
média >= 7.0 ? "Aprovado" : "Reprovado"
Resultado = Reprovado

var idade = 19
var r = idade >= 18 ? 'MAIOR' : 'MENOR'

r = 'Maior'