package main

import "fmt"

type vector struct {
	x, y, z int
}

func main() {

	v1 := vector{1, 2, 3}
	fmt.Println(v1.x)

	a := [5]int{1, 2, 5, 3, 5}
	fmt.Println(a)

	b := a[:4]
	fmt.Println(b)

	c := make([]int, 10)
	fmt.Println(c)

}
