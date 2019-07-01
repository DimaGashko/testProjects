package main

import (
	"html/template"
	"net/http"
)

var tpl *template.Template

func init() {
	tpl = template.Must(template.ParseGlob("templates/*"))
}

func main() {
	http.HandleFunc("/404", func(w http.ResponseWriter, r *http.Request) {
		tpl.ExecuteTemplate(w, "404.gohtml", "/404")
	})

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		tpl.ExecuteTemplate(w, "index.gohtml", "/index")
	})

	http.ListenAndServe(":1115", nil)
}
