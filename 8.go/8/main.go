package main

import "fmt"

type vertex struct {
	x, y int
}

func main() {
	m := make(map[int]vertex)

	m[111] = vertex{
		y: 1, x: 5,
	}

	m[222] = vertex{
		1, 5,
	}

	fmt.Println(m)

	wordsMap := map[string]string{
		"apple":   "phone",
		"table":   "lunch",
		"morning": "sun",
	}

	fmt.Println(wordsMap["morning"])
	fmt.Println(wordsMap)

	delete(wordsMap, "table")
	fmt.Println(wordsMap)

	elem, present := wordsMap["apple"]

	fmt.Println(elem, present)

}
