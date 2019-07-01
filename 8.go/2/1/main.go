package main

import (
	"io"
	"net/http"
)

func main() {
	http.HandleFunc("/", index)
	http.ListenAndServe(":1112", nil)
}

func index(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, `
		package main
		
		import (
			"fmt"
			"net/http"
			"time"
		)
		
		func greet(w http.ResponseWriter, r *http.Request) {
			fmt.Fprintf(w, "Hello World! %s", time.Now())
		}
		
		func main() {
			http.HandleFunc("/", greet)
			http.ListenAndServe(":8080", nil)
		}

		<h1>Request</h1>

		{{r}}
	`)
}
