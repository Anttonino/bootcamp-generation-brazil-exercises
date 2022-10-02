// Prompt Sync - Executar Javascript no terminal;
const prompt = require ('prompt-sync') ();
/**
 * ATIVIDADE 1
 * Informar todos os números de 1000 a 1999 que quando divididos por 11 obtemos
 * resto = 5. (FOR)
 */
// Iniciar o programa com o terminal limpo;
console.clear ();
console.log ('*****Exiba todos os valores de 1000 a 1999 que quando divididos por 11 obtemos resto = 5*****');
// Operação
for (let index = 1000; index < 1999; index++) {
    if (index % 11 == 5) {
        console.log (`Número: ${index}`);
    }
}
