function calcularMedia(notas) {

    let soma = 0

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]
    }

    let media = soma / notas.length

    return media
}

let media = calcularMedia([7, 8, 6])

console.log(`A media é ${media}`)