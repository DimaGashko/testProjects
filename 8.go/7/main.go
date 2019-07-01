package main

import "golang.org/x/tour/pic"

// Pic is Just Pic
func Pic(dx, dy int) [][]uint8 {
	p := make([][]uint8, dy)

	for i := range p {
		p[i] = make([]uint8, dx)
	}

	return p
}

func main() {
	pic.Show(Pic)
}
