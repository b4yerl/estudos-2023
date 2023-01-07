package main

import (
	"fmt"
	"path"
)

func main() {
	var dir, file string

	// Podemos usar as variáveis em uma atribuição múltipla
	dir, file = path.Split("views/index.html")

	fmt.Println("dir: ", dir)
	fmt.Println("file: ", file)

	// Podemos também descartar valores que não desejamos com o _
	// Podemos também omititr a declaração "var sheet string" e optar pela short declaration com :=

	_, sheet := path.Split("styles/main.css")

	fmt.Println("O que sobrou após descarte: ", sheet)
}
