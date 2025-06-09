let alunos = [
    {
        nome : 'Elvis',
        idade : 19,
        notas : [8, 7, 9, 10]
    },
    {
        nome : 'Maria',
        idade : 18,
        notas : [6, 5, 7, 6]
    },
    {
        nome : 'João',
        idade : 20,
        notas : [9, 8, 10, 7]
    }
]

function calcularMedia(notas) {

    let nota = 0 

    for(let i = 0; i < notas.length; i++) {
        nota += notas[i]
    }

    return nota / notas.length

}

function verificarSituacao(media) {

    return media >= 7 ? "aprovado" : "reprovado"

}

for(let i = 0; i < alunos.length; i++) {
    let aluno = alunos[i]
    let media = calcularMedia(aluno.notas)
    let situacao = verificarSituacao(media)

    console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Situação: ${situacao}\n`);
}