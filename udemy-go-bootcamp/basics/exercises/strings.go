package main

import (
	"fmt"
	"os"
	"strings"
	"unicode/utf8"
)

func main() {
	windowsPath()
	printJSON()
	rawConcat(os.Args[1])
	countChars(os.Args[1])
	removeSpaces()
	removeSpacesFromRightOnly()
}

func windowsPath() {
	path := `c:\program files\duper super\fun.txt
c:\program files\really\funny.png`

	fmt.Println(path)
}

func printJSON() {
	// Ao invés de tab, no powershell saiu melhor com espaços
	json := `
{
  "Items": [{
    "Item": {
      name": "Teddy Bear"
    }
  }]
}`

	fmt.Println(json)
}

func rawConcat(name string) {
	// name := os.Args[1]
	msg := `hi ` + name + `
how are you?`

	fmt.Println(msg)
}

func countChars(s string) {
	l := utf8.RuneCountInString(s)

	fmt.Println(l)
}

func removeSpaces() {
	msg := `
	
	The weather looks good.
I should go and play.

	`
	fmt.Println(strings.TrimSpace(msg))
}

func removeSpacesFromRightOnly() {
	name := "inanç           "
	fmt.Println(utf8.RuneCountInString(strings.TrimRight(name, " ")))
}
