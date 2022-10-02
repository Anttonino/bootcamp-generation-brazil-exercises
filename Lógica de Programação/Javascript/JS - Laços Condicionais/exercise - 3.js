// Prompt Sync - Executar Javascript no terminal;
const prompt = require ('prompt-sync') ();
/**
 * ATIVIDADE 3
 * Solicitar a idade de várias pessoas e imprimir: Total de pessoas com menos de 21 anos.
 * Total de pessoas com mais de 50 anos. O programa termina quando idade for =-99.
 * (WHILE)
 */
// Iniciar o programa com o terminal limpo;
console.clear ();
console.log ('*****VERIFICADOR DE IDADE*****\n');
// Atribuições
let idade = 0;
let jovem = 0;
let velho = 0;

while (idade >= 0) {
    // Entrada de dados;
    idade = parseInt (prompt ('Digite sua idade: '))
    //Condição
    if (idade < 21) {
        jovem++
    } else if (idade>50) {
        velho++
    }
}
// Exibição dos dados;
console.log(`Foram inseridos ${jovem} jovens`)
console.log(`Foram inseridos ${velho} idosos`)
