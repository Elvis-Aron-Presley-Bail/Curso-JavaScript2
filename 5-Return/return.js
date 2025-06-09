function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2
}

function verificarSituacao() {

    let media = calcularMedia(8, 9)

    console.log(`A média do aluno foi ${media}`)

    if (media >= 7) {
        console.log(`O aluno foi aprovado`)
    } else {
        console.log(`O aluno foi reprovado`)
    }
}

verificarSituacao()