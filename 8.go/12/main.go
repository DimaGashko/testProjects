package main

import (
	"fmt"
	"math"
)

type vector struct {
	x, y float64
}

func (v vector) abs() float64 {
	return math.Hypot(v.x, v.y)
}

func main() {
	v := vector{3, 4}
	fmt.Println(v.abs())

}
