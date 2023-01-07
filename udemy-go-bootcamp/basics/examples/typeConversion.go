package main

import "fmt"

func main() {
	speed := 100 // int
	force := 2.5 // float64

	/*
		Para realizarmos uma operação com esses 2 valores,
		devemos antes fazer a conversão de tipo, caso contrário
		uma expressão como "speed = speed * force" dispara um erro
	*/

	//speed = speed * int(force)

	/*
		Caso façamos a conversão acima teremos um problema, a conversão de tipo
		pode ser uma operação destrutiva, no caso acima a parte fracionária 0.5
		seria simplesmente arrancada do valor final
	*/

	speed = int(float64(speed) * force)

	/*
		Lembre que o tipo de uma variável é imutável, ou seja
		podemos alterar o tipo dos valores para maniplação, mas a variável deve manter
		o seu tipo, por isso devemos voltar tudo para int() caso queiramos armazenar
		o novo valor em speed
	*/

	fmt.Println(speed)
}
