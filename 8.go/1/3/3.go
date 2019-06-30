package main

import (
	"fmt"
	"math"
	"math/rand"
)

var c, d bool

func main() {
	fmt.Println(rand.Intn(50))
	fmt.Println(math.Cbrt(8))
	fmt.Println(sum(5, 7))

	a, b := swap(5, 10)
	fmt.Println(a, b)
	fmt.Println(split(17))

	var e, f, g int
	fmt.Println(a, b, c, d, e, f, g)

}

func sum(a, b int) int {
	return a + b
}

func swap(a, b int) (int, int) {
	return b, a
}

func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}
