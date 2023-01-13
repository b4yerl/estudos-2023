package main

import (
	"fmt"
	"path"
)
/*
func main() {
	color := "green";
	// color = "blue";
	color = "dark " + color;
	fmt.Println (color)
}
*/
/*
func main() {
	//var n float64
	//n = 3.14 * 2
	//fmt.Println(n)

	var (
		perimeter int
		width, height = 5, 6
	)

	perimeter = width * 2 + height * 2
	
	fmt.Println(perimeter)
}
*/
/*
func main() {
	// var (
	// 	lang string
	// 	version int
	// )

	// lang, version = "Go", 2

	// fmt.Println(lang, "version", version)

	var (
		planet string
		isTrue bool
		temp float64
	)

	planet, isTrue, temp = "Mars", true, 19.5

	fmt.Println("Air is good on", planet)
	fmt.Println("It's", isTrue)
	fmt.Println("Temperature is", temp)
}
*/
/*
func main() {
	_, b := multi()
	fmt.Println(b)
}

func multi() (int, int) {
	return 5, 4
}
*/
func main() {
	path, _ := path.Split("secret/file.txt")
	fmt.Println(path)
}