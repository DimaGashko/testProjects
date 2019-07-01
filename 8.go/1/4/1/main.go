package main

import "fmt"

func main() {
	n := 20

	for i := 0; i <= n; i++ {
		for j := 0; j <= n; j++ {
			c := "   "

			if j%2 == 0 || i%2 != 0 {
				c = "***"
			}

			fmt.Print(c)
		}

		fmt.Println()

	}

}
