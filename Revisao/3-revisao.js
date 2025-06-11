function apresentarResultado(nome, notas) {

    let nota = 0
    let situacao = ''

    for (let i = 0; i < notas.length; i++) {
        nota += notas[i]
    }

    let media = nota / notas.length

    if (media >= 7) {
        situacao = 'Aprovado'
    } else {
        situacao = 'Reprovado'
    }

    console.log(`Aluno: ${nome}`)
    console.log(`Média: ${media}`)
    console.log(`Situação: ${situacao}`)

}

apresentarResultado("Elvis", [7, 8, 6])