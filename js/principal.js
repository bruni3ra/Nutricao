var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = ("Aparecida Nutricionista");

//1o paciente = paulo
var paciente = document.querySelector("#primeiro-paciente");
var tdNome = paciente.querySelector(".info-nome");
var nome = tdNome.textContent;
console.log(nome);

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
console.log(peso);

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
console.log(altura);

var tdImc = paciente.querySelector(".info-imc");
console.log(imc);

// 10/10
var pesoEhValido = true;
var alturaEhValida = true;

if (peso < 0 || peso > 1000) {
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura < 0 || altura > 3.00) {
    console.log("Altura inválida");
    alturaEhValido = false;
    tdImc.textContent = "Altura inválida!";
}

if(alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}

