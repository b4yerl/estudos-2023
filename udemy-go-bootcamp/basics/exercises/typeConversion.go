package main

import (
	"fmt"
)

func main() {
	convertFix()
	typeSize()
}

func convertFix() {
	a, b := 10, 5.5
	fmt.Println(float64(a) + b)
}

func typeSize() {
		min := int8(127)
		max := int16(1000)
	
		fmt.Println(max + int16(min))
}