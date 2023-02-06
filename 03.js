let numPes;
let idade;
let sexo;
let expProf;
let adicionar = prompt("Quer adicionar uma Pessoa? \n 1- Sim \n 2- Não");
let media;
let contMedia = 0;
let contPes = 0;
let texto = "";
while (adicionar == 1) {
numCand = prompt("Qual o número da Pessoa?");
idade = Number(prompt("Qual a idade?" + numCand + "?"));
sexo = prompt("Qual o sexo?" + numCand + "?");
expProf = prompt("Tem experiencia na área? \n 1- Sim \n 2- Não");
if (contMedia == 0) {
    media = idade;
}
if (contMedia >= 1) {
    media = (media + idade);
}
contMedia++;
contPes++;
if (idade >= 18 && expProf == 1) {
texto = "Numero do candidato: " + numCand + ".</br> Idade: " + idade + ".</br> Sexo: " + sexo + ".</br> Experiencia: sim." +"</br></br>";
document.getElementById("texto").innerHTML += texto;
}
adicionar = prompt("Quer adicionar um candidato? \n 1- Sim \n 2- Não");
}
media = (media/contMedia);
document.getElementById("media").innerHTML = media;
document.getElementById("total-candidatos").innerHTML = contCand;

