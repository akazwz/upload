package main

import (
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/cors"

	"upload/api"
)

func main() {
	r := initHttpHandler()
	mountHandlers(r)
	startHttpServer(r)
}

func startHttpServer(r *chi.Mux) {
	s := http.Server{
		Addr:    ":8080",
		Handler: r,
	}
	log.Fatal(s.ListenAndServe())
}

func initHttpHandler() *chi.Mux {
	r := chi.NewRouter()
	return r
}

func mountHandlers(r *chi.Mux) {
	r.Use(cors.AllowAll().Handler)
	r.Put("/files/upload", api.FileApi.Upload)
}
