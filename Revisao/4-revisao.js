let alunos = [];

let quantidade = parseInt(prompt("Quantos alunos deseja cadastrar?"));

for (let i = 0; i < quantidade; i++) {
    let nome = prompt(`Digite o nome do ${i + 1}º aluno:`);
    let notasString = prompt(`Digite as notas de ${nome} separadas por vírgula (ex: 7,8,6):`);

    let notas = notasString.split(",").map(nota => Number(nota.trim()));

    alunos.push({
        nome: nome,
        notas: notas
    });
}

function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

function verificarSituacao(media) {
    return media >= 7 ? "Aprovado" : "Reprovado";
}

for (let i = 0; i < alunos.length; i++) {
    let aluno = alunos[i];
    let media = calcularMedia(aluno.notas);
    let situacao = verificarSituacao(media);

    console.log(`Aluno: ${aluno.nome}`);
    console.log(`Média: ${media.toFixed(1)}`);
    console.log(`Situação: ${situacao}`);
    console.log('---------------------------');
}
