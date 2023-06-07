module.exports = {
    soma(a, b){
       console.log('${a+b}')
    },

   subtracao(a, b){
        console.log('${a-b}')
    },

    multiplicacao(a, b){
        console.log('${a*b}')
    },

    divisao(a, b){
        if(b != 0 && b < 0){
            console.log('erro')
        } else{
            console.log('a/b')
        }
    }
}
