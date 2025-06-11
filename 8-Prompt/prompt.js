let alunos = []
let quantidade = parseInt(prompt('Quantos alunos vao se cadastrar? '))

for (let i = 0; i < quantidade; i++) {
    let nome = prompt(`Digite o nome do aluno ${i+1}: `)
    let idade = parseInt(prompt(`Digite a idade do aluno ${i+1}: `))

    let notas = []
    for (let j = 0; j < 4; j++) {
        let nota = parseInt(prompt(`Digite a nota ${j+1}`))
        notas.push(nota)
    }

    let aluno = {
        nome: nome,
        idade: idade,
        notas: notas
    }

    alunos.push(aluno)
}

function calcularMedia(notas) {
    let soma = 0
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]
    }
    return soma / notas.length
}

function verificarSituacao(media) {
    return media >= 7 ? "Aprovado" : "Reprovado"
}

for (let i = 0; i < alunos.length; i++) {
    
}