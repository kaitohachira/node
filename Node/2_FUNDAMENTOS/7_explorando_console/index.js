//imprimir mais de um valor 

const x = 10
const y = 'Bruno'
const z = [1, 2]

console.log(x, y, z)

console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

//variavel entre string 

console.log('o nome é %s, ele é professor', y)

// para limpar o console
setTimeout(() => {
    console.clear()
}, 2000)