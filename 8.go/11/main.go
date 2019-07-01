package main

import "fmt"

// fibonacci is a function that returns
// a function that returns an int.
func fibonacci() func() int {
	prev, cur := -1, 1

	return func() int {
		res := prev + cur
		prev = cur
		cur = res

		return res
	}
}

func main() {
	f := fibonacci()
	for i := 2; i < 50; i++ {
		fmt.Println(f())
	}
}
