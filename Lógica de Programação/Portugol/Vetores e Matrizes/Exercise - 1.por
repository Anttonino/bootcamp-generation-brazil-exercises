programa {
	/*
	 * 1) Faça um programa que crie um vetor por leitura 
	 * com 5 valores de pontuação de uma atividade e o 
	 * escreva em seguida. Encontre após a maior 
	 * pontuação e a apresente.
	 */
	funcao inicio () {
		real nota [5], maior = 0.0

		escreva("*****SISTEMA DE NOTAS*****\n\n")
		
		para (inteiro i = 0; i < 5; i++) {
			escreva ("Digite a nota do aluno","[",i + 1,"]: ")
			leia (nota [i])

			se (nota [i] > maior) {
				maior = nota [i]
			}
		}
	
		limpa ()
		escreva ("************RESULTADOS************\n")
		escreva ("\nA maior nota da turma foi: ", maior,"\n")
	
		para (inteiro i = 0 ;i < 5; i++) {
			escreva ("\nA nota do aluno", "[",i + 1,"]", " é: ", nota [i])
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 665; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */