programa {
	/*
	 * 1) A prefeitura de uma cidade fez uma pesquisa entre 5 de seus habitantes,
	 * coletando dados sobre o salário e número de filhos. A prefeitura deseja saber:   i
	 * a) média do salário da população; 
	 * b) média do número de filhes; 
	 * c) maior salário; 
	 * d) percentual de pessoas com salário até R$1.000,00.  
	 */
	inclua biblioteca Matematica --> mat
	
	funcao inicio () {
		inteiro filhos, salario, cont = 0, maior = 0
		real media_salario = 0.0, media_filhos = 0.0
		
		para (inteiro i = 0 ;i < 5; i++) { //O laço irá repetir o algoritmo 5 vezea
			escreva ("*****PESQUISA SOCIAL*****\n")
			escreva ("\nDigite seu salário: R$")
			leia (salario)
			escreva ("Digite o número de filhos: ")
			leia (filhos)
			
			media_salario += salario
			media_filhos += filhos

			se (salario >= 1000) { //Se salário for maior ou igual a 1000
				cont++
			}
			
			se (salario > maior) { //Sempre que um valor 
				maior = salario
			}
			
			limpa ()
		}
		escreva ("*****RESULTADO*****\n")
		escreva ("\nO maior salário é: R$", maior)
		escreva ("\nPercentual de pessoas com o salário maior que R$1000: ", (cont / 5) * 100, "%")
		escreva ("\nA média de Salário é: R$", media_salario / 5)
		escreva ("\nA média de filhos por casa é: ", mat.arredondar (media_filhos / 5,1) )
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1009; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */