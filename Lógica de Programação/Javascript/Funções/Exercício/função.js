const prompt = require('prompt-sync')() //Acesso ao promt sync

function imc (peso, altura) {
    const calculo = peso / (Math.pow(altura, 2))
    console.log(`O IMC do paciente é ${Math.floor(calculo)}`);
}

module.exports = imc; //Atribuindo o module export a função


