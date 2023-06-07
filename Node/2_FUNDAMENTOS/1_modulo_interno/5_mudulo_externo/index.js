const minimist = require('minimist')
//node index.js --nome=veida --idade=18
console.log(minimist)

const args = minimist(process.argv.slice(2))
console.log(rags)
const nome = args['nome']
const idade = args['idade']

console.log('o nome ${nome} e idade ${idade}')