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
		tpl.ExecuteTemplate(w, "404.gohtml", nil)
	})

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		tpl.ExecuteTemplate(w, "index.gohtml", nil)
	})

	http.ListenAndServe(":1113", nil)
}
