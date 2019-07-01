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
		type indexData struct {
			Name string
		}

		d := indexData{
			Name: "Hello Web By Golang",
		}

		tpl.ExecuteTemplate(w, "index.gohtml", d)
	})

	http.ListenAndServe(":1116", nil)
}
