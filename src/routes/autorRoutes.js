import express from "express";
import AutorController from "../controller/autorController.js";



const routes = express.Router();

routes.get("/autores", AutorController.trazerAutores);
routes.get("/autores/:id", AutorController.encontrarAutor);

routes.post("/autores", AutorController.criarAutor);

routes.patch("/autores/:id", AutorController.editarAutor);

routes.delete("/autores/:id", AutorController.deleteAutor);

export default routes;