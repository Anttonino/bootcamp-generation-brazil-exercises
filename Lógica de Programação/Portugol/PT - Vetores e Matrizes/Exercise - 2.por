programa {
	/*
	 * 2) Um dado convencional (6 lados) é lançado 10 vezes e o valor correspondente é 
	 * anotado. Faça um programa que gere um vetor com os lançamentos, escreva esse 
      * vetor. A seguir determine e imprima a média aritmética dos lançamentos,
 	 * contabilize e apresente também quantas foram as ocorrências da maior pontuação.
	 */
	funcao inicio () {
		inteiro valor [10], maior_valor = 0, quantidade_maior_valor = 0, soma = 0

		escreva ("*****RELATÓRIO DE VALORES*****\n")
		escreva ("\nLembre-se que o dado é de 6 lados, logo os valores devem ser estar entre 1 ou 6\n\n")

		para (inteiro i = 0; i < 10; i++) { //O laço será repetido 10x
			faca {
				escreva ("Digite o ", i + 1 ,"° valor: ") //I+1 serve para exibir a contagem do vetor a partir de 1 
				leia (valor [i]) //Cada posição do vetor será preenchida com o valor. O vetor tem 10 posições e o laço será repetido 10x.
				
			} enquanto (valor [i] < 1 ou valor [i] > 6) //Os valores só serão preenchidos se o valor for de 1 a 6 			
			soma += valor [i]

			se (valor [i] > maior_valor) { //Se o valor inserido no vetor for maior que a anterior, o valor será substituido até o laço encerrar
				maior_valor = valor [i] 
			}
		}

		limpa ()
		escreva ("*****RESULTADOS*****\n")
		escreva ("\nOs valores anotados foram: |")

		para (inteiro i = 0; i < 10; i++) { // O laço de exibição será repetido correspondendo a quantidade de posições do vetor valor[10]
			se (valor[i] == maior_valor) { // Sempre que o valor for igual a variável de maior_valor 
				quantidade_maior_valor++
			}
			escreva (valor[i], "|")
		}

		escreva ("\n\nO maior valor anotado foi: ", maior_valor, " e ele foi anotado: ", quantidade_maior_valor, "x\n")
		escreva ("A média aritmética dos valores é: ", soma * 1.0 / 10)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1784; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */