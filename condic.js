// array é uma váriavel com uma coloção de elementos
let frutas = ['banana', 'laranja', 'maçã', 'uva']
let matriculas = [1425, 2548, 2563, 'outra coisa', 1.75]
// imprimindo
console.log(frutas)

//imprimindo primeiro elemento
console.log(frutas[0])

//imprimindo o índice de um elemento
console.log(frutas.indexOf('maçã'))

//Adicionando elemento:
frutas.push('manga')
console.log(frutas)

//remover último elemento:
frutas.pop()

//remover elemento por posição:
frutas.slice(2,1)
console.log(frutas)