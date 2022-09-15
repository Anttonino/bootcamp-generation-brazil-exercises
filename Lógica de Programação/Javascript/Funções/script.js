const prompt = require('prompt-sync')() //Acesso ao prompt sync
const imc = require('./calculo'); //Acesso a função da pasta

console.log ('*****CÁLCULO DO IMC*****\n')
const nome = prompt ('Digite o nome do paciente: ');
const peso = parseInt (prompt ('Digite o peso do paciente: '));
const altura = parseFloat (prompt ('Digite o altura do paciente: '));

console.clear()
console.log('*****RESULTADO*****\n')
imc (peso, altura) // Chamada da função