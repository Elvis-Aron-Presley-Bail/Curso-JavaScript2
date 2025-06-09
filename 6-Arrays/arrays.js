let notas = [8, 7, 5, 10]

function calcularMedia(notas) {
    
    let nota = 0

    for(let i = 0; i < notas.length; i++) {
        nota += notas[i]
    }

    let media = nota / notas.length

    console.log(`A sua média é ${media}`)

    if(media >= 7) {
        console.log("O aluno foi aprovado")
    } else {
        console.log("O aluno foi reprovado")
    }

}

calcularMedia(notas)