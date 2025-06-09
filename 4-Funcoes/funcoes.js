let nome = 'Elvis'

function verificarIdade(nome,idade) {
    if (idade >= 18) {
        console.log(`${nome} é maior de idade`)
    } else {
        console.log(`${nome} é menor de idade`)
    }
}

verificarIdade(nome, 19)