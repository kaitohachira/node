//node index.js nome=veida idade=18
console.log(process.argv)

const args = process.argv.slice(2)
console.log(args)

const nome = args[0].split('=')[1]
console.log(nome)

const idade = args[0].split('=')[1]
console.log(idade)

console.log('O nome é ${nome} a idade e ${idade}')