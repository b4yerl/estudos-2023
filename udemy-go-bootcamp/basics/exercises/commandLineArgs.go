package main

import (
	"fmt"
	"os"
)

func main() {
	argsCounter()
	printPath()
	printName()
}

func argsCounter() {
	count := len(os.Args) - 1
	fmt.Printf("There are %d names.\n", count)
}

func printPath() {
	path := os.Args[0]
	fmt.Printf("Program path: %s \n", path)
}

func printName() {
	for i := 1; i < len(os.Args); i++ {
		fmt.Printf("Hello, %s \n", os.Args[i])
	}
}