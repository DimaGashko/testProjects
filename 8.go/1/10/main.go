package main

import "fmt"

func main() {
	fmt.Println(sum(1, 3, func(a, b int) int {
		fmt.Println(a, b)
		return 0
	}))

}

func sum(a, b int, callback func(int, int) int) int {
	callback(b, a)
	return a + b
}
