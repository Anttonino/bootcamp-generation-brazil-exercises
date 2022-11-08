# Introdução ao JavaScript

JavaScript® (às vezes abreviado para JS) é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser, tais como node.js,  Apache CouchDB e Adobe Acrobat. [do JavaScript]([https://docs.microsoft.com/pt-br/dotnet/csharp/tour-of-csharp/tutorials/](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript))

## O que é o JavaScript

O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos (como por exemplo a programação funcional). Saiba mais sobre o JavaScript.




## Ambiente de Trabalho JavaScript Visual Studio Code


**O Microsoft Visual Studio Code** é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle de versionamento Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código. Ele é customizável, permitindo que os usuários possam mudar o tema do editor, teclas de atalho e preferências. Ele é um software livre e de código aberto,[4][5] apesar do download oficial estar sob uma licença proprietária.[3]

O Visual Studio Code é baseado no Electron, um framework que é usado para desenvolver aplicativos Node.js para o desktop rodando no motor de layout Blink. Apesar de usar o Electron como framework,[6] o software não usa o Atom e em seu lugar emprega o mesmo componente editor (apelidado "Monaco") usado no Visual Studio Team Services (anteriormente chamado de Visual Studio Online)

## Instalando a Editor de codigo  Visual Studios Code

A instalação do Visual Studio Code é muito simples. Primeiramente, precisamos ter o arquivo de
instalação da IDE, isso é bem fácil de encontrar.  segue o link:
https://visualstudio.microsoft.com/pt-br/downloads/

![enter image description here](https://i.imgur.com/V17W0f0.png)

Depois de Realizar o download, instale o vs code em sua maquina.

## Instalando Node 

A instalação do Node é muito simples. Primeiramente, precisamos ter o arquivo de
instalação do Node, isso é bem fácil de encontrar.  segue o link:
https://nodejs.org/en/

![enter image description here](https://i.imgur.com/Vk9QXYo.png)

Depois de Realizar o download, instale o node em sua maquina.

## Extenções no Vscode

Como um dos **Ambientes de Desenvolvimento Integrado** (IDE), mais queridos pelos desenvolvedores, o Visual Studio Code tem uma gama enorme de extensões em seu ecossistema que auxiliam no processo de escrita do código e independente de qualquer linguagem.



abra o seu vscode e clique em extenções no botão indicado

![enter image description here](https://i.imgur.com/yyoCSaV.png)



Na barra de pesquisa pesquise a extenção que deseja instalar  no seu pc

![enter image description here](https://i.imgur.com/bkUS7uN.png)



Instale a extenção clicando no botão instalar

![enter image description here](https://i.imgur.com/34GLUql.png)



### Extenções utilizadas no curso JavaScript generation

- **JavaScript (ES6) code snippets** (Esta extensão contém trechos de código para JavaScript na sintaxe ES6 para o editor Vs Code (suporta JavaScript e TypeScript).)
- **JavaScript and TypeScript Nightly** (Extensão do VS Code que permite a compilação noturna do TypeScript (typescript@next) como a versão interna do TypeScript do VS Code usada para alimentar o JavaScript e o TypeScript IntelliSense.).)
- **HTML Snippets** (Esta extensão contém trechos de código HTML  para o editor Vs Code )
- **HTML CSS Support** (Esta extensão contém trechos de código HTML e css  para o editor Vs Code )
- **Code Runner** (Esta extensão permite executar  codigo javaScript no console do vsCode através do node)

## Formas de Execução de codigo javaScript (Navegador/Node) 

### Execução de codigo javaScript pelo navegador

este método nececita de 2 arquivos um arquivo javaScript e um arquivo html com uma tag script que referencia através do **src** o arquivo javascript como no exemplo abaixo.

**script.js**

```javascript
var mensagem = "Ola mundo!"
alert(mensagem)
```

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <script src="./script.js"></script>
</body>
</html>
```

Execute esse codigo no navegador clicando duas vezes no arquivo index.html

![enter image description here](https://i.imgur.com/kly6z7L.png)

![enter image description here](https://i.imgur.com/3P6C0Uv.png)

### Execução de codigo javaScript pelo node

este método nececita apena de um arquivo  javaScript

**script.js**

```javascript
var mensagem = "Ola mundo!"
console.log(mensagem)
```

Para executar esse codigo necessita do node instalado em sua maquina e da extenção vscode code runner

![enter image description here](https://i.imgur.com/3jMGlAI.png)

Com node e code runner instalado clique com botão direito  do mouse sobre o arquivo javascript que deseja executar, em seguida clique em Run Code.

![enter image description here](https://i.imgur.com/2YoxB2Z.png)

E pronto seu codigo irá executar no console do vscode sem a nescessidade de um navegador.

**Obs esse modo de execução não suporta o método alert() apenas console.log()**



## Forma de Execução por Navegador é recomendado para os conteudos:

1. **Entrada e Saída de dados**
2. **Declaração de Variáveis e Constantes**
3. **Operadores**
4. **Estruturas de Controle**
5. **Estruturas de Repetição**
6. **Arrays**



## Forma de Execução por Node é recomendado para os conteudos:

1. **Funções**
2. **Orientação a Objetos**
3. **Collections**
4. **Métodos manipulação string**
5. **Métodos manipulação array**
6. **Arrow functions**



## Entrada e Saída de dados

Basicamente toda a programação consiste em três etapas, a primeira é a entrada de
dados, onde o sistema irá receber os dados do usuário, a segunda etapa é o
processamento de dados, que é uma etapa que não é possível prever quando o usuário
irá executar mas que basicamente irá processar (manipular) os dados e fazer a sua
visualização ou mesmo o seu armazenamento e por fim teremos a terceira etapa, a saída
de dados, onde poderemos ter diversas formas de retorno de informações para o
usuário, como por exemplo, em um monitor, em um display, em um led, em uma
impressora e etc.

![enter image description here](https://i.imgur.com/PeY3kXN.png)

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        var nome = "";


        nome = prompt ("Qual o seu nome?");


        alert("Hello World " + nome);
    </script>
</body>

</html>

```



Em nosso exemplo, nosso programa apenas imprime “Hello World” na tela. Para fazer
isso, usamos o método console.log Todo texto (string) em Javascript é delimitado por
aspas duplas. Note
também que o texto “Hello World” está entre parênteses, que indica o início e término
de um parâmetro de uma função.

```javascript
console.log("Hello, World");
```

```javascript
alert("Hello, World");
```

Console.log() imprime um texto no navegador 

alert() imprime um texto em uma aba no seu navegador

| <img src="https://i.imgur.com/vVDBDG0.png" title="source: imgur.com" width="300px"/> | **Alerta de BSM:** *Sempre importante utilizar atenção aos detalhes nos detalhes de fechamento de escopo com as chaves termino de instrução com ;* |
| ------------------------------------------------------------ | :----------------------------------------------------------- |



### Método prompt();

O método prompt()  que implementa operações
de entrada de dados pelo teclado.

**Entrada de texto digitado pelo usuário**

```javascript
var userName = prompt();
```

retorna uma cadeia de caracteres simples, ou seja, que não usa o
caractere espaço em branco;

**Exemplo de um programa ulizando a classe Scanner:**

script.js

```javascript
var signo = prompt("Qual é o seu signo?");

if (signo.toLowerCase() == "escorpião") {
  alert("Legal! Eu sou de Escorpião também!");
}

// há muitas formas de se usar o recurso prompt
var sign = prompt(); // abrir uma janela de promtpt em branco
var sign = prompt();       //  abrir uma janela de promtpt em branco
var sign = prompt('Você está se sentindo com sorte'); // abrir uma janela com o texto "Você está se sentindo com sorte"
var sign = prompt('Você está se sentindo com sorte', 'certamente'); // abrir uma janela com o texto "Você está se sentindo com sorte" e com o valor padrão "certamente"
```

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <script src="./script.js"></script>
</body>
</html>
```

| <img src="https://i.imgur.com/vVDBDG0.png" title="source: imgur.com" width="300px"/> | **Alerta de BSM:** *Sempre importante utilizar a comunicação para a leitura dos materias e para perguntar para o instrutor caso tenha duvida* |
| ------------------------------------------------------------ | :----------------------------------------------------------- |

Execute esse codigo no navegador clicando duas vezes no arquivo index.html

## Declaração de Variáveis e Constantes

### Variável

Para criar um idenficador (nome da variável) em JavaScript, precisamos seguir algumas
regras, listadas a seguir:

>  - Deve conter apenas letras, _ (underline), $ ou os números de 0 a 9.
>  - Deve obrigatoriamente se iniciar por uma letra (preferencialmente).
>   - Deve iniciar com uma letra minúscula (boa práca).   Não pode    conter espaços Não podemos usar palavras-chave da linguagem .
>    - O nome deve ser único dentro de um escopo

Sintaxe:

onde **tipo** é tipo de dado que a varável irá armazenar, **idenficador** é seu nome, e **valor**
é o valor inicial atribuído à variável, o qual é opcional (denotado pelos colchetes, que
não devem ser digitados na declaração).

Exemplo de declaração de variáveis:

```javaScript
nome = ";
idade =" ";
```

Neste caso estamos declarando duma variável chamada  **idade** do tipo inteiro e uma
outra variável chamada **nome** do tipo string.

### Atribuição de valores para as variáveis

```javaScript
a = 45;
t = ‘T’; 
valor = 200;
x = 98.80; 
sexo = ‘F’;
dia; // variável declarada e não inicializada
dia = 20; // variável atribuída agora
```

| <img src="https://i.imgur.com/vVDBDG0.png" title="source: imgur.com" width="300px"/> | **Alerta de BSM:** *Sempre importante utilizar atenção aos detalhes nos detalhes de escrita para os tipos string e char precisa o valor estar entre "" * |
| ------------------------------------------------------------ | :----------------------------------------------------------- |

### Categorias de Variáveis

Existem três categorias de variáveis que podem ser declaradas em javaScript :


- Locais
- De instância
- De classe

Falaremos sobre esses três tipos de variáveis mais adiante neste documento, quando já
vermos apresentado os conceitos de orientação a objetos. Porém, vamos conceituá-
las de forma muito concisa a seguir, como uma introdução ao assunto:

**Variáveis Locais**

Podem ser utilizadas dentro do método onde foram declaradas, não sendo acessíveis de
outros pontos do programa.

**Variáveis de Instância**


Uma classe pode conter variáveis que são declaradas fora dos métodos, chamadas de
Variáveis de Instância. São usadas pelos objetos para armazenar seus estados.

Seus valores são específicos de cada instância e não são compartlhados entre as
instâncias.

**Variáveis de Classe**

Variáveis declaradas como estáticas são variáveis compartilhadas entre todos os objetos
instanciados a partir de uma classe. Por isso, essas variáveis também são conhecidas
como Variáveis de Classe.

### Constante

Uma constante é declarada quando precisamos lidar com dados que não devem ser
alterados durante a execução do programa. Para isso, utilizamos a palavra reservada
**const** para que a variável seja inicializada uma única vez.

Exemplos de declaração de constantes:



script.js

```javaScript

    const Pi = 3.14159;
    const SpeedOfLight = 300000; // km per sec.
    var radius = 5.3;
    var area = Constants.Pi * (radius * radius);
    var secsFromSun = 149476000 // Constants.SpeedOfLight; // in km
    alert(secsFromSun);

```



index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <script src="./script.js"></script>
</body>
</html>
```



Por convenção, usamos letras maiúsculas para declarar constantes e assim disngui-las
das variáveis.

## Operadores

Para manipular os valores das variáveis de um programa, devemos ulizar os operadores
oferecidos pela linguagem de programação adotada. A linguagem javaScript possui diversos
operadores e os principais são categorizados da seguinte forma:

```javaScript
Aritméco(+, -, *, /, %) 

Atribuição(=, +=, -=, *=, /=, %=)

Relacional(==, !=, <, <=, >, >=)

Lógico(&&, ||)
```

Exemplos:

Operadores Aritméticos

```javaScript
var umMaisUm = 1 + 1; // umMaisUm = 2
var tresVezesDois = 3 * 2; // tresVezesDois = 6
var quatroDivididoPor2 = 4 / 2; // quatroDivididoPor2 = 2
var seisModuloCinco = 6 % 5; // seisModuloCinco = 1
var x = 7;


x = x + 1 * 2; // x = 9 7 x = x - 3; // x = 6 8
x = x / (6 - 2 + (3*5)/(16-1)); // x = 2
```

------

O módulo de um número x, na matemática, é o valor numérico de x
desconsiderando o seu sinal (valor absoluto). Na matemática expressamos o módulo
da seguinte forma: |−2|=2. Em linguagens de programação, o módulo de um número
é o resto da divisão desse número por outro. No exemplo acima, o resto da divisão
de 6 por 5 é iguala 1. Além disso, lemos a expressão 6%5 da seguinte forma: seis
módulo cinco.

------

Operadores de Atribuição

```javaScript
var valor = 1; // valor = 1

valor += 2; // valor = 3

valor -= 1; // valor = 2

valor *= 6; // valor = 12

valor /= 3; // valor = 4

valor %= 3; // valor = 1
```

Operadores Relacionais

```javaScript
var valor = 2;

var boolean t = false;
```

```javaScript
var t = (valor == 2); // t = true

var t = (valor != 2); // t = false

var t = (valor < 2); // t = false

var t = (valor <= 2); // t = true

var t = (valor > 1); // t = true

var t = (valor >= 1); // t = true
```

Operadores Lógicos

```javaScript
var valor = 30;
var teste = false;
```

```javaScript
var teste = valor < 40 && valor > 20; // teste = true
var teste = valor < 40 && valor > 30; // teste = false
var teste = valor > 30 || valor > 20; // teste = true
varteste = valor > 30 || valor < 20; // teste = false
varteste = valor < 50 && valor == 30; // teste = true
```

| <img src="https://i.imgur.com/vVDBDG0.png" title="source: imgur.com" width="300px"/> | **Alerta de BSM:** *Sempre importante utilizar atenção aos detalhes nas diferença dos operadores lógicos ;* |
| ------------------------------------------------------------ | :----------------------------------------------------------- |


### Palavras reservadas

O javaScript faz uso de algumas palavras que não podem ser utilizadas, por exemplo, para
criar nome de variáveis, classes, métodos e etc... A seguir listamos algumas palavras
reservadas disponível no link abaixo:

https://www.w3schools.com/js/js_reserved.asp

### Estruturas de Controle if ( )...else

Quando queremos tomar uma decisão em nosso código, ou seja, definir outras opções
em javaScript utilizamos o comando if (se).
A sintaxe do if no javaScript é a seguinte

```javaScript
if (condicaoBooleana)
{ codigo; }
```
Uma condição booleana é qualquer expressão que retorne true ou false. Para isso, você
pode usar os operadores <, >, <=, >= e outros.
Além da utilização do if, nós poderemos utilizar a cláusula else (senão) para indicar o
comportamento que deve ser executado no caso da expressão booleana ser falsa.
Vejamos o exemplo abaixo para identificar essas duas cláusulas:

```javascript
string nome = prompt();
console.log("Nome: ");
var nome = alert();
console.log("Peso: ");
var peso = prompt();
console.log("Altura: ");
var altura = alert();
var imc = peso / (altura * altura);
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <script src="./script.js"></script>
</body>
</html>
```

Em relação a este exemplo caso o seu IMC for maior ou igual a 40 irá aparecer duas
mensagens ( _“Obesidade grau III” e “Muito cuidado com o seu peso”_ ) atendendo a nossa
necessidade.
Mas caso o seu IMC for 34 além de apresentar a mensagem “ _Obesidade grau I_ ” irá
aparecer “ _Muito cuidado com o seu peso_ ” não atendendo a nossa necessidade.
Isso se deve ao fato de termos uma regra em relação as chaves de demarcação de cada
estrutura if( ). Só se torna obrigatório o uso das chaves { } quando ver mais de uma
linha de execução no bloco, quando ver apenas uma única linha de execução não se
torna necessário.
Nesse mesmo exemplo se quisermos colocar mais de uma opção dentro da condição
iremos ulizar os operadores lógicos, como no exemplo abaixo:

```javaScript
if (sexo == 'F' && imc < 19.1) {
alert("Abaixo do peso."); 
}
else if (sexo == 'F' && imc <= 25.8) {
alert("Peso ideal."); 
}
else if (sexo == 'F' && imc <= 27.3) {
alert("Um pouco acima do peso."); 
}
else if (sexo == 'F' && imc <= 32.3) {
alert("Acima do peso ideal.");
}
else if (sexo == 'F') { 
alert("Obeso.");
}
else if (sexo == 'M' && imc < 20.7) {
alert("Abaixo do peso.");
}
else if (sexo == 'M' && imc <= 26.4) {
alert("Peso ideal.");
}
else if (sexo == 'M' && imc <= 27.8) {
alert("Um pouco acima do peso.");
}
else if (sexo == 'M' && imc <= 31.1) {
alert("Acima do peso ideal."); 
}
```
```javaScript
if (imc < 18.5)
alert("Abaixo do peso ideal.");
else if (imc < 25)
alert("Peso ideal.");
else if (imc < 30)
alert("Acima do peso.");
else if (imc < 35)
alert("Obesidade grau I.");
else if (imc < 40)
alert("Obesidade grau II.");
else
alert("Obesidade grau III.");
alert("Muito cuidado com seu peso.");
```

```javaScript
else if (sexo == 'M') {
alert("Obeso.");
}
```


```javaScript
teste = valor < 40 && valor > 20; // teste = true
teste = valor < 40 && valor > 30; // teste = false
teste = valor > 30 || valor > 20; // teste = true
teste = valor > 30 || valor < 20; // teste = false
teste = valor < 50 && valor == 30; // teste = true
```

| <img src="https://i.imgur.com/vVDBDG0.png" title="source: imgur.com" width="300px"/> | **Alerta de BSM:** *Sempre importante utilizar atenção aos detalhes nas diferença dos operadores lógicos  maior e menor ;* |
| ------------------------------------------------------------ | :----------------------------------------------------------- |



O operador lógico && avalia as expressões do lado esquerdo e direito e retorna apenas
um resultado booleano. Para a expressão completa ser verdadeira, tanto o lado direito
como o lado esquerdo devem ser verdadeiras, mas para que a expressão completa seja
falsa, pelo menos um lado deve ser falso.

Ainda existe o operador lógico “OU”, representado por ||. Podemos ainda mudar o
código-fonte de nosso exemplo para usá-lo.

Veja que, usando o operador ||, conseguimos diminuir bastante a quantidade de linhas
de programação, porém deixamos as expressões booleanas dos ifs mais complexas, pois
agrupamos duas expressões que usam o operador && dentro de outra que usa o
operador ||.
O operador lógico || avalia as expressões dos dois lados e retorna um único resultado
booleano. Para que a expressão completa seja verdadeira, pelo menos um lado deve ser
verdadeiro.

### Estrutura de Controle switch( )

Sintaxe:

```javascript
switch (Expressao){
case valor1: conjuntoDeSentencas;
break;
case valor2: SentencasAlternativas;
break;
case valor3: SentencasAlternativas2;
break;
case valor4: SentencasAlternativas3;
break;
}
```

O comando switch pode ter vários possíveis caminhos de decisão (casos). O primeiro
caso que estiver de acordo com o valor passado para o switch inicia a execução das
instruções do caso.
A sentença ‘break’ atrás de cada opção de case serve para que não avalie o resto de
opções e sim que saia diretamente do ‘Switch’, por isso, dependendo do que quiser
fazer, você colocará ou não.
Vamos verificar um exemplo para demonstrar a execução desse laço:

```javaScript
switch (i) {
case '1': alert( "i contem um 1");
case '2': alert( "i contem um 2");
case '3': alert( "i contem um 3");
}
```
Exemplo usando o break:

```javaScript
var dia;
alert("Digite um numero para encontrar o seu dia: ");
dia =  pront();
switch (dia) {
case 1:
 alert("Domingo");
break;
case 2:
 alert("Segunda");
break;
case 3:
 alert("Terça");
break;
case 4:
 alert("Quarta");
break;
case 5:
 alert("Quinta");
break;
case 6:
 alert("Sexta");
break;
 alert("Sabado");
break;
default:
	alert("Número digitado é inválido!!!");
break;
	}
}
```



## Estruturas de Repetição

Essas estruturas fazem com que uma instrução, ou bloco execute repetidamente,
enquanto uma expressão seja verdadeira.
Existem 2 tipos:
● Estruturas de repetição incondicional (simples): Repete um número específico de
vezes. Estrutura _for_
● Estruturas de repetição condicional: São estruturas de repetição que o controle é feito
pela avaliação de expressões condicionais. Ou seja, o número de repeções é
indeterminado na fase de programação, será conhecido durante a execução. Estruturas
_while_ e _do – while_

### Estrutura for ( )

```javaScript
for (inicialização; condição de execução; Incremento/decremento)
Bloco de Instruções;
```
● Inicialização: É usado para dar valor inicial a variável de controle (contador).
● Condição de execução: É uma expressão lógica que determina a execução associada
ao for, geralmente utilizando a variável de controle.
● Incremento/Decremento: Determina como a variável de controle (ou outras variáveis
também) será alterada a cada iteração do for.
● A inicialização é feita apenas antes da primeira iteração.
● A execução é encerrada quando a condição de execução for avaliada como falsa.
Exemplo:
Programa que soma os n primeiros números que entraram como argumento.

```javaScript
for (int i = 0; i < 3; i++)
{
    console.log(i);
}
// Output:
// 012soma+=i;
```



| <img src="https://i.imgur.com/vVDBDG0.png" title="source: imgur.com" width="300px"/> | **Alerta de BSM:** *Sempre importante utilizar atenção aos detalhes  na estrutura do laço de  repetição for. |
| ------------------------------------------------------------ | :----------------------------------------------------------- |



### Estrutura while ( )

O while é uma das formas de fazer loops (laços) em javaScript . Loops são usados para
executar um bloco de código diversas vezes, dependendo de uma condição ser
verdadeira.
O exemplo abaixo imprime todos os números em um intervalo informado pelo usuário.

```javaScript
int n = 0;
while (n < 5)
{
    console.log(n);
    n++;
}
// Output:
// 01234
```
O bloco de código dentro do while será executado enquanto o valor da variável
numeroAtual for menor ou igual ao valor da variável numeroFinal. Veja que usamos o
operador de incremento para adicionar à variável numeroAtual uma unidade a cada
execução do bloco de código do loop.

### Estrutura do...while( )

A declaração do-while é similar ao while. Ele executa a instrução pelo menos uma vez e
connua executando enquanto a expressão booleana for verdadeira.
Vejamos o exemplo abaixo:

```javaScript
int n = 0;
do
{
    console.log(n);
    n++;
} while (n < 5);
// Output:
// 01234
```



### Uma estrutura dentro da outra

Um bloco também pode ser declarado dentro de outro. Isto é, um if dentro de um for,
ou um for dentro de um for, algo como:

```
while (condicao) {
for (int i = 0; i < 10; i++) {
// código }
}
```


| <img src="https://i.imgur.com/vVDBDG0.png" title="source: imgur.com" width="300px"/> | **Alerta de BSM:** *Sempre importante utilizar Persistência e atenção aos detalhes quando estivermos codificando em javaScript* |
| ------------------------------------------------------------ | :----------------------------------------------------------- |





**Exemplo 02:** Queremos adiciona um novo Atributo/Coluna na  Tabela. Nesse caso executamos a seguinte query: 

## Arrays

Quando desejamos armazenar uma grande quantidade de valores de um determinado
tipo, podemos utilizar _arrays_. Um array é um objeto que pode armazenar muitos valores
de um determinado tipo.
Podemos imaginar um array como sendo um armário com um determinado número de
gavetas. E cada gaveta possui um rótulo com um número de identificação.

![enter image description here](https://i.imgur.com/w8gSnsN.png)

Para declarar um array devemos seguir a seguinte sintaxe:

**nome_do_array = [numero_de_elementos];**
Ou:
**nome_do_array = { valor1, valor2, ...,valorx};**

Por exemplo, se em uma sala de aula ver 20 alunos e você quiser declarar 20 variáveis
do tipo float usando array, ficaria assim:

**nota = [ 20 ];**
**nota = { 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 90. 1 , 10. 02 ,- 11 , 12. 9 , 13. 7 , 14. 5 , 15. 7 , 16. 0 , 17. 5 , 19. 3 , 20. 2 };**

E o nome dos alunos, armazenaríamos em strings:
**nome = [ 20 ];**

Se quisermos acessar os elementos de um array podemos fazer o seguinte:

```javaScript
var cars = ["Volvo", "BMW", "Ford", "Mazda"];
console.log(cars[0]);
// Outputs Volvo
```
E neste mesmo exemplo se quisermos alterar um elemento do array basta fazer o
seguinte:

```javaScript
var cars = ["Volvo", "BMW", "Ford", "Mazda"];
cars[0] = "Opel";
console.log(cars[0]);
```
Se quisermos saber o tamanho de um array iremos ulizar a propriedade length ( ).

```javaScript
arrayUm =[12, 3, 5, 68, 9, 6, 73, 44, 456, 65, 321] ;
arrayDois = [43, 42, 4, 8, 55, 21, 2, 45] ;

	if (arrayDois.length >8) {
		console.log("Tamanho do ArrayDois - Maior que 8!");
	} else {
		console.log("Tamanho do ArrayDois - Menor que 8!"``);
	}
	console.log("\nTamanho do ArrayUm = "+arrayUm.length);
	}
```
Para percorrer um array podemos ulizar um for-each:

```javaScript
cars = ["Volvo", "", "Ford", "Mazda"];
cars.forEach(element => {
    console.log(elements)
});
```

O exemplo acima pode ser lido assim: para cada string elemento (chamado i - como
em i NDEX) em carros , imprimir o valor de i.

Se você comparar o forloop e o loop for-each , verá que o método for -each é mais
fácil de escrever, não requer um contador (usando a propriedade length) e é mais legível.

### Arrays Multidimensionais

Os arrays bidimensionais precisam de dois índices para idenficar um elemento
parcular.

Por exemplo, quando um array é identificação dessa forma “numero [indiceA][indiceB]”, a
variável numero é o array, o indiceA é a linha e o indiceB é identificado como a coluna,
fazendo uma identificação de cada elemento no array por número de linha e coluna.

```javaScript
const mat = [ 
	[1, 2, 3], 
	[4, 5, 6], 
	[7, 8, 9] 
]; 

console.log(mat[0][0]);
```
## Funções em javaScript


Função é algo que deve ser feito uma ou várias vezes, sempre que for necessário para se
obter um resultado.

- Pode, ou não, receber parâmetros;

- Sempre retorna um resultado;

- Exemplos:

- Mostrar um menu e retornar a opção;

- Solicitar uma entrada ao usuário;

- Efetuar uma operação matemáca;

- Ler dados de um arquivo;

  

  A seguir podemos visualizar um exemplo de uma função chamada _MostraMenu_ que está
  sendo chamada pelo _main_.

```javaScript
    opcao = 0;

    do {
        opcao = MostrarMenu();
    }  while (opcao != 2);

    function MostrarMenu(params) {
        entrada= "";
        console.log("==-MostrarMenu==");
        console.log("1 Mostrar de novo");
        console.log("2  - Sair");
        return entrada = prompt();
    }
```

Outro exemplo que podemos ulizar uma função é calcular os descontos percentuais
em valores de produtos.

- Precisa de quais dados?
- Precisa do valor atual do produto – double;
- Precisa do percentual de desconto – double;
- Resulta em algum novo dado?
- Sim, é uma função! O valor com desconto – double;


```javaScript
function MostrarMenu(va, pc) {
   double vd = va * (pc / 100); 
   return va - vd;
}
```


| <img src="https://i.imgur.com/hOgWvSc.png" title="source: imgur.com" width="100px"/> | **IMPORTANTE:** *Revisar o conteúdo de lógica de programação caso tiver alguma duvida lembre-se através da pratica temos a melhoria constante* |
| ------------------------------------------------------------ | ------------------------------------------------------------ |



## Orientação a Objetos

Programação Orientada a Objetos (POO) é um paradigma de programação que ajuda a
definir a estrutura de programas de computadores, baseado nos conceitos do mundo
real, sejam eles reais ou abstratos. A ideia é simular as coisas que existem e acontecem
no mundo real no mundo virtual.



| <img src="https://i.imgur.com/hOgWvSc.png" title="source: imgur.com" width="100px"/> | **IMPORTANTE:** *Para trabalhar com orientação objeto utilizaremos no curso o superset do JavaScript TypeScript* |
| ------------------------------------------------------------ | ------------------------------------------------------------ |



## TypeScript

***TypeScript*** é uma linguagem de programação de código aberto desenvolvida pela . É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem. Tipos fornecem uma maneira de descrever a forma de um objeto, fornecendo melhor documentação e permitindo que o TypeScript valide se seu código está funcionando corretamente. Como TypeScript é um superconjunto de JavaScript, os programas JavaScript existentes também são programas TypeScript válidos.



### Exemplo de código utilizando JavaScript

```javaScript
var nome = "João";
var idade = 20;
var possuiDoutorado = false;

nome = 20; // isso é permitido em JavaScript e pode comprometer o algoritmo ao longo da execução.
```



### Exemplo de código utilizando TypeScript

```typescript
var nome:string = "João";
var idade:number = 20;
var possuiDoutorado:boolean = false;


nome = 20; // isso não é permitido em TypeScript o algoritmo impede que uma variavel fortemente tipada com string receba um valor numerico, sendo assim protegendo a integridade do algoritmo
```



### Vantagens de se utilizar TypeScript

- O TypeScript apresenta erros no momento da organização, enquanto o JavaScript, no tempo de execução.
- O TypeScript oferece as vantagens da composição estática discricionária: os tipos de TS podem ser adicionados a fatores, capacidades, propriedades e assim por diante.
- O TypeScript sustenta especificamente a composição estática. A composição estática pode ser valiosa para ajudar a arquivar capacidades, explicar a utilização e diminuir a sobrecarga psicológica (dicas de tipo de interface e obtenção de erros esperados de programação contínua).
- O TypeScript é executado em qualquer programa ou motor JavaScript.
- Ferramentas extraordinárias com IntelliSense que fornecem pistas dinâmicas como o código adicional.
- TypeScript ajuda na organização do código.
- TypeScript tem uma ideia de namespace ao caracterizar um módulo.
- As explicações do TypeScript podem ser discricionárias.
- TypeScript mantém interfaces.
- Os módulos gerenciadores do TypeScript oferecem um destaque entre outros insights do engenheiro IDE.
- O TypeScript tem uma documentação melhor para APIs que está em um estado de harmonia com o código-fonte. Algumas organizações relatam uma diminuição nos bugs quando mudam para o TypeScript.



### Classes e Objetos

Em javaScript os programas são escritos em pequenos pedaços separados, chamados de
objetos. Objetos são pequenos programas que guardam dentro de si os dados – em
suma, as variáveis – que precisam para executar suas tarefas. Os objetos também
trazem em si, como sub-rotinas, as instruções para processar esses dados. As variáveis
que um objeto guarda são chamadas de atributos, e as suas sub-rotinas são chamadas
de métodos.

Vamos colocar um exemplo bem simples para entender esses conceitos. Pensem em um
carro, este carro possui um motor, uma cor, portas, câmbio, etc. Ele também possui
comportamentos que, provavelmente, foram o movo de sua compra, como acelerar,
desacelerar, acender os faróis, buzinar e tocar música. Podemos dizer que o carro novo é
um _objeto_ , onde suas características são seus _atributos_ (dados atrelados ao objeto) e
seus comportamentos são ações ou _métodos_.
Ao mesmo tempo o seu carro, é apenas um dentre muitos outros dentro da loja, ou seja,
seu carro pode ser classificado como um carro que o seu carro será uma _instância_ dessa
classe chamada carro.

![enter image description here](https://i.imgur.com/QfO3hLI.png)


Podemos dar um outro exemplo em um domínio bancário:

![enter image description here](https://i.imgur.com/CXKDH3I.png)

Podemos representar uma classe através de diagramas UML.
![enter image description here](https://i.imgur.com/0ZswrCV.png)

Repare que a classe em si é um conceito abstrato, como um molde, que se torna
concreto e palpável através da criação de um objeto. Chamamos essa criação de
_instanciação da classe_ , como se estivéssemos usando esse molde (classe) para criar um
objeto.
Bem, visto os conceitos fundamentais de orientação à objetos, agora vamos aplicar
todos esses conceitos na prática utilizando a linguagem de programação javaScript.
Colocamos uma classe genérica _Pessoa_ , onde teria que guardar os vários pedaços do seu
nome, então para isso teríamos que criar alguns atributos para a mesma, por exemplo:


```typescript
class Pessoa {
	private  primeiroNome: string;
	private  ultimoNome: string;
	private  nomesDoMeio: string;
}
```

Criamos a classe Pessoa com três atributos, que será modelo para a criação de outros
objetos. Explicando melhor, então criamos três atributos do po private que serve para
deixar o atributo privado, ou seja, somente métodos da própria classe Pessoa que
poderá acessá-lo e manipular o mesmo.
Mas não basta criar os atributos, temos que também dar algumas funcionalidades para
os mesmos, para isso criamos um método para retornar o nome completo por exemplo.



```typescript
class Pessoa {
	private  primeiroNome: string;
	private  ultimoNome: string;
	private  nomesDoMeio: string;

    public getNomeCompleto() {
        var nomeCompleto = this.primeiroNome + " "+  this.nomesDoMeio + " " + this.ultimoNome;
        return nomeCompleto;
    }
}

```



A primeira linha, public getNomeCompleto(), especifica o método. Primeiro,
declara-se, através da palavra-chave public, que o método é público – isto é, qualquer
método, de qualquer classe, pode invocá-lo. O método retorna objetos do tipo string e
se chama getNomeCompleto. O par de parênteses vazio significa que ele não recebe
parâmetro algum.

O conteúdo do método vem entre um par de chaves. Dentro do método, declara-se uma
nova variável, do tipo string, chamada nomeCompleto. Ao contrário de variáveis como
primeiroNome, nomeCompleto não é um atributo, mas sim uma _variável local_.
primeiroNome existirá desde a criação do objeto até sua retirada da memória, mas
nomeCompleto só existirá enquanto o método getNomeCompleto() estiver sendo
executado, e para cada chamada do método uma nova variável será criada.

A variável nomeCompleto recebe o resultado da concatenação de string. O sinal de
atribuição é =, e a concatenação de string é feita através do operador +. Ao final, um
ponto-e-vírgula sinaliza o fim deste comando. Abaixo, temos o comando return. Quando
ele é invocado, o método termina e o valor que está à sua frente (no caso, o valor
referenciado pela variável nomeCompleto) é retornado.
Até agora ainda não construímos nenhum objeto, para isto javaScript tem uma ferramenta


chamada _construtor_. Geralmente os construtores tem o mesmo nome da classe. Esse
construtor cria um novo objeto e este novo objeto é armazenado na variável _pessoa_.

```typescript
Pessoa pessoa = new Pessoa();
```
Agora vamos criar uma pessoa chamada Francisco Pinho Nunes.

```typescript

Pessoa pessoa = new Pessoa();
pessoa.primeiroNome = “Francisco”;
pessoa.nomeDoMeio = “Pinho”;
pessoa.ultimoNome = “Nunes”;
console.log(pessoa.getNomeCompleto());

```
No entanto, isto não é possível porque os atributos são privados. Apenas os métodos da
classe _Pessoa_ podem acessá-los. Isso pode ser solucionado de várias maneiras, e uma
das mais elegantes é criando o nosso próprio construtor, como abaixo:

```typescript
function Pessoa(primeiro, meio, ultimo ) {
    primeiroNome = primeiro;
    ultimoNome = ultimo;
    nomeDoMeio = meio;
}
```

A declaração do construtor é sempre o nome da classe seguido pela lista de parâmetros.
A palavra _public_ indica que o construtor é público, de modo que pode ser invocado por
qualquer classe. Um ponto importante sobre construtores é que eles não criam nem
retornam objetos; quem faz isso é a palavra reservada _new_. O construtor apenas
executa algum procedimento sobre o objeto criado pelo comando _new_. Este construtor,
no caso, recebe os nomes como parâmetros e os atribui aos atributos.




```typescript
Pessoa pessoa = new Pessoa( "Francisco", "Pinho", "Nunes" );
```



Só para idenficar, vejamos como ficou a classe _Pessoa_ completa:

```typescript

	class  Pessoa
	{
		primeiroNome:string;
		nomeDoMeio:string;
		ultimoNome:string;

        constructor(primeiroNome:string, nomeDoMeio:string, ultimoNome:string)
        {
            this.primeiroNome = primeiroNome;
            this.nomeDoMeio = nomeDoMeio;
            this.ultimoNome = ultimoNome;
        }

        public getNomeCompleto() {
            var nomeCompleto = this.primeiroNome + " "+  this.nomeDoMeio + " " + this.ultimoNome;
            return nomeCompleto;
        }

    }
```

E a classe ProgramaNome, que utiliza a classe Pessoa para gerar um nome completo a
partir das partes.

```typescript
Pessoa pessoa = new Pessoa("Francisco","Pinho","Nunes");
console.log(pessoa.getNomeCompleto());

```
### Objeto this

A palavra reservada _this_ faz referência ao próprio objeto, quando usado dentro de um
método, por exemplo.
No código-fonte da classe Aeronave, vamos criar um método chamado
alterarTotalAssentos, que receberá um argumento com o novo número de passageiros a
ser atribuído à variável de instância totalAssentos.

```typescript
class Aeronave {
    totalAssentos:number;
    assentosReservados:number;
    
    reservarAssentos(assentos:number):void {
        var assentosReservados =+ assentos;
    }
    
    calcularAssentosDisponiveis():number {
    return  this.totalAssentos - this.assentosReservados;
    }
    
     alterarTotalAssentos(totalAssentos:number):void {
    this.totalAssentos = totalAssentos;
    }
}
```

Estamos dizendo que queremos atribuir o valor da variável local à variável de instância.
Quando usamos _this_ , estamos deixando essa informação explícita.

| <img src="https://i.imgur.com/vVDBDG0.png" title="source: imgur.com" width="300px"/> | **Alerta de BSM:** *Sempre importante utilizar a comunicação para a leitura dos materias e para perguntar para o instrutor caso tenha duvida* |
| ------------------------------------------------------------ | :----------------------------------------------------------- |



### Encapsulamento

Vamos voltar ao exemplo que demos do carro:
![enter image description here](https://i.imgur.com/xWH5fA8.png)
Os métodos do carro, como acelerar, podem usar atributos e outros métodos do carro
como o tanque de gasolina e o mecanismo de injeção de combustível, respectivamente,
uma vez que acelerar gasta combustível.
Mas alguns métodos e atributos não podem ser permitidos qualquer tipo de alteração,
ou seja, eles não são visíveis para fora do carro.
Na POO, um atributo ou método que não é visível de fora do próprio objeto é chamado
de “ _privado_ ” e quando é visível, é chamado de “ _público_ ”.


![enter image description here](https://i.imgur.com/4pwtSG5.png)

Ler ou alterar um atributo encapsulado pode ser feito a partir de _geters e seters_ (colocar
referência).
Esse _encapsulamento_ de atributos e métodos impede o chamado _vazamento de escopo_ ,
onde um atributo ou método é visível por alguém que não deveria vê-lo, como outro
objeto ou classe. Isso evita a confusão do uso de variáveis globais no programa,
deixando mais fácil de idenficar em qual estado cada variável vai estar a cada momento
do programa, já que a restrição de acesso nos permite idenficar quem consegue
modificá-la.
Exemplo:

```typescript
class Carro {
    
    private velocidade: number;
    private modelo: string;
    private MecanismoAceleracao: MecanismoAceleracao;
    private cor:string;
        
    /* Repare que o mecanismo de aceleração é inserido no carro ao ser construí
    public Carro(String modelo, MecanismoAceleracao mecanismoAceleracao) {
        this.modelo = modelo;
        this.mecanismoAceleracao = mecanismoAceleracao; this.velocidade = 0; }
    public void acelerar() {
        this.mecanismoAceleracao.acelerar(); }
    public void frear() { /* código do carro para frear */ 
    
    constructor(modelo: string, mecanismoAceleracao: MecanismoAceleracao, cor:string) {
        this.modelo = modelo;
        this.MecanismoAceleracao = mecanismoAceleracao;
        this.cor = cor;
    }

    acelerar():void {
        this.mecanismoAceleracao.acelerar();
    }

    frear():void {/* código do carro para frear */}

    acenderFarol():void {/* código do carro para acender o farol */}

    getVelocidade():number { 
        return this.velocidade
    }

    setVelocidade():void {
        /* código para alterar a velocidade do carro */ /* Como só o próprio carro*/    
    }

    getModelo() {
         return this.modelo;
         }

    getCor() { 
        return this.cor; 
    }
    /* podemos mudar a cor do carro quando quisermos */
    
    setCor(cor:string) { 
        this.cor = cor; 
    }

        
}
```
### Herança

![enter image description here](https://i.imgur.com/tQoUQij.png)

Quando dizemos que uma classe A _é um tipo de_ classe B, dizemos que a classe A _herda_
as características da classe B e que a classe B é _mãe_ da classe A, estabelecendo então
uma relação de herança entre elas.
Neste caso, por exemplo, o cachorro, herdará todas as características do mamífero e o
mamífero herda as características de um animal.
Por exemplo, poderíamos ter uma classe Animal que representasse animais em geral e
as atividades que todos eles executam. Uma dessas atividades é comer, e nossa classe
poderia ser como a abaixo.

```typescript
class Animal {

    comer(alimento:string):void {
        console.log("Eu estou comendo "+alimento);  
    }
	
}
```
Uma classe de mamíferos _estenderia_ a classe de animais, porque mamíferos podem fazer
coisas que outros animais não podem – por exemplo, gerar leite. Uma classe Mamifero
estenderia a classe _Animal_ usando a sinal **:** em sua declaração:

```typescript
class Mamifero implements Animal {
}
```
Um novo método, _lactar()_ , também poderia ser adicionado:

```typescript
lactar():string {
return "leite" ;
}
```
Como mamíferos são animais, também precisam do método _comer()_ , e aí entra uma das
vantagens da herança: como a classe Mamífero estende a classe Animal, ela _herda_ todos
os métodos de Animal, então não é preciso reescrevê-los.

```typescript
class AnimaisAcao {

		Animal animal = new Animal();
		Mamifero mamifero = new Mamifero();
		animal.comer (" plantas ");
		mamifero.comer (" queijo ");
		string produto = mamifero.lactar();
		console.log("O produto da lactação é "+ produto);

}
```
O programa acima representa bem isso: note como o método comer() é invocado,
mesmo sem ser declarado em Mamífero.

A figura abaixo mostra a impressão deste programa:

![enter image description here](https://i.imgur.com/ZGg7eHY.png)



| <img src="https://i.imgur.com/vVDBDG0.png" title="source: imgur.com" width="300px"/> | **Alerta de BSM:** *Sempre importante utilizar atenção aos detalhes no sinal de : para herança em javaScript |
| ------------------------------------------------------------ | :----------------------------------------------------------- |


### Interface

Quando duas (ou mais) classes possuem comportamentos comuns que podem ser
separados em uma outra classe, dizemos que a “classe comum” é uma _interface_ , que
pode ser “herdada” pelas outras classes. Note que colocamos a interface como “classe
comum”, que pode ser “herdada” (com aspas), porque uma interface não é exatamente
um classe, mas sim um conjunto de métodos que todas as classes que herdarem dela
devem possuir (implementar) - portanto, uma interface não é “herdada” por uma classe,
mas sim _implementada_. No mundo do desenvolvimento de software, dizemos que uma
interface é um “contrato”: uma classe que implementa uma interface deve fornecer uma
implementação a todos os métodos que a interface define, e em compensação, a classe
implementadora pode dizer que ela é do tipo da interface.

Abaixo é possível ver um exemplo de uma interface chamada FiguraGeometrica_ com três
assinaturas de métodos que virão a ser implementados pelas classes referentes às
figuras geométricas.

```typescript
interface FiguraGeometrica
    {
        
        getNomeFigura():string;
        getArea():number;
        getPerimetro():number;

    }  
```

Para realizar a chamada/referência a uma interface por uma determinada classe, é
necessário adicionar o sinal **:** ao final da assinatura da classe que irá
implementar a interface escolhida.

Sintaxe:
**public class nome_classe : nome_interface**

Onde:

```typescript
nome_classe – Nome da classe a ser implementada.
nome_Interface – Nome da interface a se implementada pela classe.
```
Abaixo é possível ver duas classes que implementam a interface FiguraGeometrica, uma
chamada Quadrado e outra Triangulo.

Classe Quadrado

```typescript
class Quadrado implements FiguraGeometrica {
	private lado:number;


	public getLado():number {
	return this.lado;
    }

    public setLado(lado:number):void {
	this.lado = lado;
    }


    getArea():number {
	var area = 0;
	area = this.lado * this.lado;
	return area;
    }

    getPerimetro():number {
	    var perimetro = 0;
	    perimetro = this.lado * 4;
	    return perimetro;
    }
    getNomeFigura():string {
	return "quadrado";
	}
}
```
Classe Triangulo

```typescript
class Triangulo implements FiguraGeometrica {

	private base:number;
	private altura:number;
	private ladoA:number;
	private ladoB:number;
	private ladoC:number;

public getAltura():number {
	return this.altura;
}

public  setAltura(altura:number):void {
	this.altura = altura;
}

public getBase():number {
	return this.base;
}

public setBase(base:number):void {
	this.base = base;
}

public getLadoA():number {
	return this.ladoA;
}

public setLadoA(ladoA:number):void  {
	this.ladoA = ladoA;
}

public getLadoB():number {
	return this.ladoB;
}

public setLadoB(ladoB:number):void  {
	this.ladoB = ladoB;
}

public getLadoC():number {
	return this.ladoC;
}

public setLadoC(ladoC:number):void {
	this.ladoC = ladoC;
}


public override string getNomeFigura() {
	return "Triangulo";
}


public getArea():number {
	var area = 0;
	var area = (this.getBase() * this.getAltura()) / 2;
	return area;
}

public getPerimetro():number {
	var perimetro = 0;
	var perimetro = this.ladoA + this.ladoB + this.ladoC;
		return perimetro;
	}
}
```
| <img src="https://i.imgur.com/vVDBDG0.png" title="source: imgur.com" width="300px"/> | **Alerta de BSM:** *Sempre importante utilizar atenção aos detalhes no sinal de : para implementar interfaces em javaScript* |
| ------------------------------------------------------------ | :----------------------------------------------------------- |



Como é possível ver acima, ambas as classes seguiram o contrato da interface
_FiguraGeometrica_ , porém cada uma delas a implementou de maneira diferente.

Ao contrário da herança que limita uma classe a herdar somente uma classe pai por vez,
é possível que uma classe implemente varias interfaces ao mesmo tempo.

## Polimorfismo


Polimorfismo é a capacidade de um objeto poder ser referenciado de várias formas.
(cuidado, polimorfismo não quer dizer que o objeto fica se transformando, muito pelo
contrário, um objeto nasce de um po e morre daquele po, o que pode mudar é a
maneira como nos referimos a ele).
Se você tem uma _class Animal_ sabe que todo animal come, sendo que Cães por exemplo
comem ração e Tigres carne. Você pode chamar o método comer nessas 2 classes
mesmo sabendo que elas se comportam diferentemente.

```typescript
class Animal {
	public comer():void {
		console.log( "Animal Comendo..." );
	}
}

class Cao implements Animal {
	public  comer():void {
	console.log( "Cão Comendo..." );
	}
}
class Tigre implements Animal {
	public comer():void {
	console.log( "Tirgre Comendo..." );
	}
}
```


No caso a sua chamado de método polimórfico ficaria assim:

```typescript
class Test {
	public  fazerAnimalComer:void( animal:Animal ) {
	animal.comer();
}

Test t = new Test();
t.fazerAnimalComer( new Animal() );
t.fazerAnimalComer( new Cao() );
t.fazerAnimalComer( new Trigre() );

```
Você vai notar que cada chamada vai fazer uma coisa diferente, porém como existe
herança entre as classes todos os métodos vão funcionar, porque são do tipo do mais
genérico (Animal) ou são filhos do mais genérico.



| <img src="https://i.imgur.com/hOgWvSc.png" title="source: imgur.com" width="100px"/> | **IMPORTANTE:** *Revisar o conteúdo de programação orientada a objeto caso tiver alguma duvida, lembre-se através da pratica temos a melhoria constante* |
| ------------------------------------------------------------ | ------------------------------------------------------------ |




## Exceptions

O uso de exceções permite separar a detecção da ocorrência de uma situação
excepcional do seu tratamento, ao se programar um método em javaScript.
Alguns possíveis movos externos para ocorrer uma exceção são:

```
Tentar abrir um arquivo que não existe.
Tentar fazer consulta a um banco de dados que não está disponível.
Tentar escrever algo em um arquivo sobre o qual não se tem permissão de escrita.
Tentar conectar em servidor inexistente.
```
Alguns possíveis erros de lógica para ocorrer uma exceção são:

```
Tentar manipular um objeto que está com o valor nulo.
Dividir um número por zero.
Tentar manipular um po de dado como se fosse outro.
Tentar ulizar um método ou classe não existentes.
```
Para tratar as exceções em javaScript são utilizamos os comandos try e catch.
Praticamente, o uso dos blocos try/catch se dá em métodos que envolvem alguma
manipulação de dados, bem como:

```
CRUD no banco de dados;
Índices fora do intervalo de array;
Cálculos matemácos;
I/O de dados;
Erros de rede;
Anulação de objetos;
Entre outros;
Exemplo da ulização do bloco try/catch:
```

```typescript
var frase:string = '';
var novaFrase:string = '';

try {
    novaFrase = frase.toUpperCase();
} catch (error) {
     //TRATAMENTO DA exceção
     console.log('O frase inicial está nula,para solucional tal o problema, foi lhe atribuito um valor default.');
    frase = 'Frase vazia';
    novaFrase = frase.toUpperCase();
}

console.log("Frase anga: " + frase);
console.log("Frase nova: " + novaFrase);

/*Quando este código for executado, o mesmo lançará uma NullPointerExcepon,
porém esta exceção será tratada desta vez, sendo a mesma capturada pelo catch{}
e dentro deste bloco as devidas providências são tomadas. Neste caso é atribuído
um valor default à variável frase.*/
```


### Estrutura try-catch-finally

Como vimos anteriormente, usamos try-catch para tratar uma exceção. A terceira parte
dessa estrutura, finally, especifica um trecho de código que será sempre executado, não
importando o que acontecer dentro do bloco try-catch.
Não é possível deixar um bloco try-catch-finally sem executar sua parte finally.
Vejamos um exemplo para este bloco:

```typescript
let x = prompt();
try { 
  if(x == "")  throw "is Empty";
  if(x =! 0) throw "not a number";
  if(x > 10)   throw "too high";
  if(x < 5)  throw "too low";
}
catch(err) {
  console.log(err);
}
finally {
console.log("finally");
}
```

## Collections

A coleção em javaScript é uma estrutura que fornece uma arquitetura para armazenar e
manipular o grupo de objetos.

Para muitos aplicativos, você desejará criar e gerenciar grupos de objetos relacionados. Há duas maneiras de agrupar objetos: criando matrizes de objetos e criando coleções de objetos.

As matrizes são mais úteis para criar e trabalhar com um número fixo de objetos fortemente tipados. Para obter informações sobre matrizes, consulte [Matrizes](https://docs.microsoft.com/pt-br/dotnet/csharp/programming-guide/arrays/).

As coleções fornecem uma maneira mais flexível de trabalhar com grupos de objetos. Ao contrário das matrizes, o grupo de objetos com o qual você trabalha pode crescer e reduzir dinamicamente conforme as necessidades do aplicativo são alteradas. Para algumas coleções, você pode atribuir uma chave para qualquer objeto que coloque na coleção para que você possa recuperar rapidamente o objeto usando a chave.

Uma coleção é uma classe, portanto você deve declarar uma instância da classe antes de adicionar elementos a essa coleção.

Se a coleção contiver elementos de apenas um tipo de dados, você poderá usar uma das classes no namespace [System.Collections.Generic](https://docs.microsoft.com/pt-br/dotnet/api/system.collections.generic). Uma coleção genérica impõe segurança de tipos para que nenhum outro tipo de dados possa ser adicionado a ela. Ao recuperar um elemento de uma coleção genérica, você não precisa determinar seu tipo de dados ou convertê-lo.


### Array


```typescript
var salmons:string[] = []
salmons.push("chinook");
salmons.push("coho");
salmons.push("pink");
salmons.push("sockeye");

// Iterate through the list.
salmons.forEach(salmon => {
    console.log(salmon + " ");
})
```


Se o conteúdo de uma coleção for conhecido com antecedência, você poderá usar um *inicializador de coleção* para inicializar a coleção. Para obter mais informações, consulte [Inicializadores de coleção e objeto](https://docs.microsoft.com/pt-br/dotnet/csharp/programming-guide/classes-and-structs/object-and-collection-initializers).

O exemplo a seguir é igual ao exemplo anterior, exceto que um inicializador de coleção é usado para adicionar elementos à coleção.



```typescript
// Create a list of strings by using a
// collection initializer.
var salmons =  [ "chinook", "coho", "pink", "sockeye" ];

for(let index = 0; index < salmons.length; index++) {
    console.log(salmons[index] + " ");
    
}
// Output: chinook coho pink sockeye
```
Você pode usar uma instrução [for](https://docs.microsoft.com/pt-br/dotnet/csharp/language-reference/statements/iteration-statements#the-for-statement) em vez de uma instrução `foreach` para iterar em uma coleção. Você realiza isso acessando os elementos da coleção pela posição do índice. O índice dos elementos começa em 0 e termina na contagem de elementos, menos de 1

O exemplo a seguir itera nos elementos de uma coleção usando `for` em vez de `foreach`.

```typescript
// Create a list of strings by using a
// collection initializer.
var salmons =  [ "chinook", "coho", "pink", "sockeye" ];

for(let index = 0; index < salmons.length; index++) {
    console.log(salmons[index] + " ");
    
}
// Output: chinook coho pink sockeye
```

O exemplo a seguir remove um elemento da coleção, especificando o objeto a ser removido.

```typescript
var salmons =  [ "chinook", "coho", "pink", "sockeye" ];

for( var i = 0; i < salmons.length; i++){ 
    
    if ( salmons[i] == "chinook" ) { 

        salmons.splice(i, 1); 
    }
}
```


## Estrutura forEach

A instrução executa uma instrução ou um bloco de instruções para cada elemento em uma instância do tipo que implementa a interface ou , como mostra o `foreach` exemplo a [System.Collections.IEnumerable](https://docs.microsoft.com/pt-br/dotnet/api/system.collections.ienumerable) [System.Collections.Generic.IEnumerable](https://docs.microsoft.com/pt-br/dotnet/api/system.collections.generic.ienumerable-1) seguir:

```typescript
const fruits = ["apple", "orange", "cherry"];

fruits.forEach(element => {
    console.log(element);
})
```

A `foreach` instrução não está limitada a esses tipos. Você pode usá-lo com uma instância de qualquer tipo que atenda às seguintes condições:

- Um tipo tem o método público sem `GetEnumerator` parâmetros. A partir do javaScript o `GetEnumerator` método pode ser o método de extensão de um [tipo](https://docs.microsoft.com/pt-br/dotnet/csharp/programming-guide/classes-and-structs/extension-methods).
- O tipo de retorno do `GetEnumerator` método tem a propriedade pública e o método público sem `Current` `MoveNext` parâmetros cujo tipo de retorno é `bool` .



# Métodos manipulação string

Veja alguns métodos de manipulação de string em JavaScript.

### String.prototype.includes()

 método **includes()** determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando `true` ou `false`.

```typescript
str.includes(searchString[, position])

var str = 'Ser, ou não ser, eis a questão.';

console.log(str.includes('Ser'));         // true
console.log(str.includes('questão'));     // true
console.log(str.includes('não existe'));  // false
console.log(str.includes('ser', 1));      // true
console.log(str.includes('SER'));   
```

### String.prototype.substring()

Com este método conseguimos recuperar partes de uma string, apenas informando o índice de início (em uma das sobrecargas), semelhante a como foi feito com o método Remove. Veja como pegar trechos de uma frase qualquer.

```typescript
str.substring(indexStart[, indexEnd])

var anyString = "Mozilla";

// Mostra "Moz"
console.log(anyString.substring(0,3));
console.log(anyString.substring(3,0));

// Mostra "lla"
console.log(anyString.substring(4,7));
console.log(anyString.substring(7,4));

// Mostra "Mozill"
console.log(anyString.substring(0,6));

// Mostra "Mozilla"
console.log(anyString.substring(0,7));
console.log(anyString.substring(0,10));
```

### String.prototype.toLowerCase()

Com este método conseguimos converter qualquer string para letras minúsculas. Veja como é bem simples seu uso.



```typescript
str.toLowerCase()

console.log('ALFABETO'.toLowerCase()); // 'alfabeto'
```

### String.prototype.toUpperCase()

Função oposta ao método ToLower, que faz toda a string ficar maiúscula. 

```typescript
str.toUpperCase()

console.log('alfabeto'.toUpperCase()); // 'ALFABETO'
```



# Métodos manipulação array

Veja alguns métodos de manipulação de string em JavaScript.



### Array.prototype.push()

O método **push()** adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

```typescript
var numeros = [1, 2, 3];
numeros.push(4);

console.log(numeros); // [1, 2, 3, 4]

numeros.push(5, 6, 7);

console.log(numeros); // [1, 2, 3, 4, 5, 6, 7]
```



### Array.prototype.pop()

O método **pop()** remove o **último** elemento de um array e retorna aquele elemento.

```typescript
var meuPeixe = ['acara-bandeira', 'palhaco', 'mandarim', 'esturjao'];

console.log(meuPeixe); // ['acara-bandeira', 'palhaco', 'mandarim', 'esturjao']

var meuPeixePop = meuPeixe.pop();

console.log(meuPeixe); // ['acara-bandeira', 'palhaco', 'mandarim' ]

console.log(meuPeixePop); // 'esturjao'
```



### Array.prototype.indexOf()

O método **indexOf()** retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.

```typescript
var array = [2, 5, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```



### Array.prototype.includes()

O método includes`()` determina se um array contém um determinado elemento, retornando `true` ou `false` apropriadamente.

```typescript
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```



### Array.prototype.splice()

O método **splice()** altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

```typescript
var myFish = ["angel", "clown", "mandarin", "surgeon"];

//remove 0 elementos a partir do índice 2, e insere "drum"
var removed = myFish.splice(2, 0, "drum");
//myFish é ["angel", "clown", "drum", "mandarin", "surgeon"]
//removed é [], nenhum elemento removido

//remove 1 elemento do índice 3
removed = myFish.splice(3, 1);
//myFish é ["angel", "clown", "drum", "surgeon"]
//removed é ["mandarim"]

//remove 1 elemento a partir do índice 2, e insere "trumpet"
removed = myFish.splice(2, 1, "trumpet");
//myFish é ["angel", "clown", "trumpet", "surgeon"]
//removed é ["drum"]

//remove 2 elementos a partir do índice 0, e insere "parrot", "anemone" e "blue"
removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
//myFish é ["parrot", "anemone", "blue", "trumpet", "surgeon"]
//removed é ["angel", "clown"]

//remove 2 elementos a partir do indice 3
removed = myFish.splice(3, Number.MAX_VALUE);
//myFish é ["parrot", "anemone", "blue"]
//removed é ["trumpet", "surgeon"]
```



### Array.prototype.toString()

O método `**toString()**` retorna uma string representando um array específico e seus elementos.

```typescript
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var myVar = monthNames.toString(); // atribui 'Jan,Feb,Mar,Apr' para myVar.
```



### Array.prototype.forEach()

O método `forEach()` executa uma dada função em cada elemento de um array.

```typescript
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);
```



### Array.prototype.map()

O método **map()** invoca a função `callback` passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

```typescript
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots é [1, 2, 3], numbers ainda é [1, 4, 9]
```



```typescript
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles é agora [2, 8, 18]. numbers ainda é [1, 4, 9]
```



# Arrow functions

Uma **expressão \*arrow function\*** possui uma sintaxe mais curta quando comparada a uma expressão de função (*[function expression](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/function)*) e não tem seu próprio *[this](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this)*, *[arguments](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/arguments)*, *[super](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/super)* ou *[new.target](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/new.target)*. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (*constructors*).



```typescript
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]
```



### Funções mais curtas

```typescript
var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

elements.map(function(element) {
  return element.length;
}); // esta sentença retorna o array: [8, 6, 7, 9]

// A função regular acima pode ser escrita como a arrow function abaixo
elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]

// Quando só existe um parâmetro, podemos remover os parênteses envolvendo os parâmetros:
elements.map(element => {
  return element.length;
}); // [8, 6, 7, 9]

// Quando a única sentença em uma arrow function é `return`, podemos remover `return` e remover
// as chaves envolvendo a sentença
elements.map(element => element.length); // [8, 6, 7, 9]

// Neste caso, porque só precisamos da propriedade length, podemos usar o parâmetro de destruição (destructing parameter):
// Note que a string `"length"` corresponde a propriedade que queremos obter enquanto que a
// obviamente propriedade não especial `lengthFooBArX` é só o nome de uma variável que pode ser mudado
// para qualquer nome válido de variável que você quiser
elements.map(({ "length": lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]

// Esta atribuição de parâmetro de destruição (destructing parameter) pode ser escrita como visto abaixo. Entretanto, note que
// não há um específico `"length"` para selecionar qual propriedade nós queremos obter. Ao invés disso, o nome literal
// da própria variável `length` é usado como a propriedade que queremos recuperar do objeto.
elements.map(({ length }) => length); // [8, 6, 7, 9]
```
