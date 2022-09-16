programa{
	
	funcao inicio(){
		
	inteiro n1[3][2], n2[3][2], n3[3][2]

		escreva("*********Digite o valor da primeira Matriz*********\n")
		para(inteiro i=0;i<3;i++){ //Primeira matriz
			para(inteiro j=0;j<2;j++){
				escreva("\ndigite um valor para linha ","[",i,"] e coluna ","[",j,"]: ")
				leia(n1[i][j])
			}	
		}
		
		limpa() 

		escreva("*********Digite o valor da segunda Matriz*********\n")
		para(inteiro i=0;i<3;i++){//Segunda matriz
			para(inteiro j=0;j<2;j++){
				escreva("\ndigite um valor para linha ","[",i,"] e coluna ","[",j,"]: ")
				leia(n2[i][j])
			}
		}
		
		limpa()
		
		escreva("*********SOMA DAS MATRIZES*********\n")
		para(inteiro i=0;i<3;i++){//Soma das matrizes
			para(inteiro j=0;j<2;j++){
				n3[i][j] = n1[i][j] + n2[i][j]
				escreva("\nValor linha","[",i,"] e coluna ","[",j,"]: ",n3[i][j])
			}
		}

			escreva("\n\n*********SUBTRAÇÃO DAS MATRIZES*********\n")
		para(inteiro i=0;i<3;i++){//Soma das matrizes
			para(inteiro j=0;j<2;j++){
				n3[i][j] = n1[i][j] - n2[i][j]
				escreva("\nValor linha","[",i,"] e coluna ","[",j,"]: ",n3[i][j])
			}
		}





	}
	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 849; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */