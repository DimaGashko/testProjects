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

	m := [][]int{
		{1, 2, 3, 4},
		{5, 6, 7, 8},
		{9, 9, 9, 9},
	}

	m = append(m, m[0])

	fmt.Println(m)

	m[0][0] = 111

	fmt.Println(m)

	fmt.Println()

	for i, v := range m {
		for j, w := range v {
			fmt.Println(i, v, j, w)

		}
	}

}
