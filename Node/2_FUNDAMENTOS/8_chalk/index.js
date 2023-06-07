const chalk = require('chalk')

const nota = 9

    if(nota >= 7){
console.log(chalk.green.bgCyan('Paravéns, voce foi aprovado'))
    } else {
        console.log(chalk.bgRed.yellow('voce foi reprovado!'))
    }






    setTimeout(() => {
        console.clear()
    }, 4000)

    //node index.js