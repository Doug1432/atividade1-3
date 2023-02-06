let registro = prompt("Deseja registrar algum aluno? \n 1-Sim \n 2-Não");
let matricula = 0;
let nota1 = 0;
let nota2 = 0;
let nota3 = 0;
let frequencia = 0;
let media = 0;
let sitFreq = 0;
let sitMedia = 0;
let resultado = 0;
let tAlunoRepFalt = 0;
let tAlunoRepNota = 0;
let aluno = "";
let tAlunoAprovado = 0;
let tAlunoReprovados = 0;
let tMediaTurma = 0;
let tAlunos = 0;
let mediaMaior = 0;
let mediaMenor = 10;
let situacaoAluno = "";

while (registro == "1") {
  matricula = prompt("Digite o número de matrícula do aluno:")
  nota1 = Number(prompt("Digite a primeira nota:"))
  nota2 = Number(prompt("Digite a segunda nota:"))
  nota3 = Number(prompt("Digite a terceira nota:"))
  frequencia = Number (prompt ("Digite a frequência do aluno. (32 máximo)"))
  media = (nota1 + nota2 + nota3)/3;

        //frequencia de presença
  if (frequencia >= 25){
    sitFreq = 1;
  }else {
    sitFreq =2;
    tAlunoRepFalt++
  }

        //Nota aluno
  if (media >= 7) {
    sitMedia = 1;
  } else {
    sitMedia = 2;
    tAlunoRepNota++
  }
        // situação do aluno
  if (sitFreq == 1 && sitMedia == 1){
    situacaoAluno = "Aprovado"
    tAlunoAprovado++;
  } else {
    situacaoAluno = "Reprovado"
    tAlunoReprovados++;
  }

  //Media turma
  tAlunos++
  tMediaTurma += media 
  tMediaTurma = tMediaTurma/ tAlunos;

  //Média maior

  if (media > mediaMaior){
    mediaMaior = media
  }

if ( media < mediaMenor){
  mediaMenor = media
}

  aluno +=  "</br> Matrícula: " + matricula + "Média: " + media + "Situação: " + situacaoAluno;
  registro = prompt("Deseja registrar mais algum aluno? \n 1-Sim \n 2-Não");


}



document.getElementById("mediaTurma").innerHTML=tMediaTurma
document.getElementById("alunos").innerHTML= aluno;
document.getElementById("totalAprovados").innerHTML=tAlunoAprovado;
document.getElementById("totalReprovadosFalta").innerHTML=tAlunoRepFalt;
document.getElementById("totalReprovadosNotas").innerHTML=tAlunoRepNota;
document.getElementById("maiorMediaTurma").innerHTML=mediaMaior;
document.getElementById("menorMediaTurma").innerHTML=mediaMenor;


