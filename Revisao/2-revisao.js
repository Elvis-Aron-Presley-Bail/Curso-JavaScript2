function calcularMedia(media) {

    let nota = 0

    for (let i = 0; i < media.length; i++) {
        nota += media[i]
    }

    let mediaFinal = nota / media.length

    return mediaFinal

}

function verificarSituacao(media) {

    return media >= 7 ? "Aprovado" : "Reprovado"

}

let media = calcularMedia([7, 8, 6])
let situacao = verificarSituacao(media)

console.log(`A média é ${media} e o aluno foi ${situacao}`)