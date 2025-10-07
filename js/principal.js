 var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = ("Aparecida Nutricionista");

//1o paciente = paulo
var paciente = document.querySelector("#primeiro-paciente");
var tdNome = paciente.querySelector(".info-nome");
var nome = tdNome.textContent;
console.log(paciente);
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
console.log(peso);
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
console.log(altura);




// var paciente = document.querySelector("#primeiro-paciente");
// var tdGordura = paciente.querySelector(".info-gordura");
// var gordura = tdGordura.textContent
// console.log(paciente);
// console.log(gordura);

// var paciente = document.querySelector("#primeiro-paciente");
// var tdImc = paciente.querySelector(".info-imc");
// var imc = tdImc.textContent
// console.log(paciente);
// console.log(imc);