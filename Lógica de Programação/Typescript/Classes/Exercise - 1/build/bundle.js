/*ATIVIDADE 1
 * Crie uma classe cliente e apresente os atributos e métodos referentes
 * a esta classe, em seguida crie um objeto cliente, defina as instâncias
 * deste objeto e apresente as informações deste objeto no console.
 */
var Cliente = /** @class */ (function () {
    function Cliente(nome, cpf, sexo) {
        this.nome = nome;
        this.cpf = cpf;
        this.sexo = sexo;
    }
    Cliente.prototype.getnome = function () {
        return this.nome + '\n' + this.cpf + '\n' + this.sexo;
    };
    return Cliente;
}());
var nome = prompt('Digite o seu nome') + '';
var cpf = prompt('Digite o seu cpf') + '';
var sexo = prompt('Digite o seu sexo') + '';
var cliente = new Cliente(nome, cpf, sexo);
console.log(cliente.getnome());

document.write (`Nome: ${nome}<br>CPF: ${cpf}<br>Sexo: ${sexo}`)