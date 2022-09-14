programa {
	/*
	 * 2) Elabore um programa que leia a variável N, número de horas trabalhadas de um operário. 
	 * E calcule o salário sabendo-se que ele ganha R$ 10,00 por hora. Quando o número de horas
	 * exceder a 50 calcule o excesso de pagamento armazenando-o na variável E, caso 
	 * contrário zerar tal variável. A hora excedente de trabalho vale R$ 20,00. 
	 * No final do processamento imprimir o salário total e o salário excedente.
	 */
	funcao inicio () {
		real horas, salario, excedente = 0.0, horas_extra = 0.0, salario_excedente = 0.0
	
		escreva ("*****CÁLCULO DE SALÁRIO DO FUNCIONÁRIO*****\n")
		escreva ("\nDigite o número de horas trabalhadas: ")
		leia (horas)
		
		salario = 10 * horas //Cálculo do salário base

		limpa ()
		escreva ("*****RESULTADO*****\n")
		
		se (horas <= 50) { //Se as horas trabalhadas forem abaixo de 50
			escreva ("\nO salário final foi: R$", salario) 
		} senao se (horas > 50) { //Se as horas trabalhadas ultrapassarem 50
    			excedente = horas - 50 
			horas_extra = excedente * 20	
			salario_excedente = salario + horas_extra 
			
			escreva ("\nSalário total foi: R$", salario)
			escreva ("\nO valor do bônus foi: R$", horas_extra)
			escreva ("\nO valor do salário final foi: R$", salario_excedente)
		}
  	}	
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 22; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */