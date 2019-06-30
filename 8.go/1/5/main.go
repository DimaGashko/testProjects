package main

import "fmt"

func main() {
	i := 5

	fmt.Println(i)
	inc(&i)
	fmt.Println(i)

}

func inc(n *int) {
	*n++
}
