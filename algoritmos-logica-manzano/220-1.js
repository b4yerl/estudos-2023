class Aluno {
  nome;
  bimestre = new Array(4);
}

function main() {
  const alunosRaw = []

  for(let i = 0; i < 3; i++) {
    alunoAtual = new Aluno();
    alunoAtual.nome = prompt('Nome: ');
    for(let j = 0; j < 4; j++){
      alunoAtual.bimestre[j] = prompt(`Nota ${j + 1}: `);
    }
    alunosRaw.push(alunoAtual);
  }

  const alunos = organizarAlunos(alunosRaw)
  console.log(alunos)
}

function organizarAlunos(alunos) {
  for(let i = 0; i < alunos.length; i++) {
    for(let j = 0; j < alunos.length; j++) {
      for(let char = 0; char < alunos[i].nome.length; char++) {
        const primeiroAluno = alunos[i].nome.charCodeAt(char)
        const segundoAluno = alunos[j].nome.charCodeAt(char)
        if(primeiroAluno < segundoAluno) {
          [alunos[i], alunos[j]] = [alunos[j], alunos[i]]
          break;
        }
        else if(primeiroAluno > segundoAluno){
          break
        }
      }
    }
  }
  return alunos;
}
main()