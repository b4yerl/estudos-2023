// Resolvi fazer o BANGER antes da aula
// Vou usar o for aqui simplesmente porque sim :)
package main

import (
	"fmt"
	"os"
	"strings"
	"unicode/utf8"
)

func main() {
	for i := 1; i < len(os.Args); i++ {
		yellItBack(os.Args[i])
	}
}

func yellItBack(s string) {
	cs := strings.ToUpper(s)
	l := utf8.RuneCountInString(cs)
	// Da minha versão original pra após a aula vou alterar só esse final
	// Assim vou terminar o exercício proposto
	ep := strings.Repeat("!", l)
	fmt.Println(ep + cs + ep)
}

// funciona u.u
