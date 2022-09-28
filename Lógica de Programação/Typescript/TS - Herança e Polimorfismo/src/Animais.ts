abstract class Animal {
    public nome: string;
    public idade: number;
  
    constructor (nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
    }
}

export { Animal };
