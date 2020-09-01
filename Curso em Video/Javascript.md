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