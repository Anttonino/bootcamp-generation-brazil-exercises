programa {
	/*
	 * 3) Elaborar um programa que efetue a leitura sucessiva de valores 
	 * numéricos e apresente no final o total da soma dos valores, 
	 * a média e o total de valores lidos. O programa deve fazer as 
	 * leituras dos valores enquanto o usuário estiver fornecendo 
	 * valores positivos. Ou seja, o programa deve parar quando o 
	 * usuário fornecer um valor negativo.
	 */
	funcao inicio () {
		inteiro numero = 0, quantidade = 0, soma = 0
		
		enquanto (numero >= 0) { //O laço será repetido até a variável numero receber um valor abaixo de zero
			escreva ("\nDigite um número: ")
			leia (numero)
		
			se (numero >= 0) { //Se o número for positivo
				quantidade++
				soma += numero
			}
		}
		escreva ("\nQuantidade: ", quantidade)
		escreva ("\nSoma: ", soma)
		escreva ("\nmedia: ", soma / quantidade)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 832; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */