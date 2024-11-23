/* ARQUIVO QUE RECEBE AS ROTAS */

import express from "express";
import multer from "multer";
import cors from "cors";
import { atualizarNovoPost, listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

// s0torage para Windows
const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    // Permite que o sevidor interprete requisições com corpo no json
    app.use(express.json());
    app.use(cors(corsOptions));
    //Rota para buscar todos os posts
    app.get("/posts", listarPosts);
    //Rota para criar um post
    app.post("/posts", postarNovoPost)
    // Rota para upload de imagens (assumindo uma única imagem chamada "imagem")
    app.post("/upload", upload.single("imagem"), uploadImagem )

    app.put("/upload/:id", atualizarNovoPost)
}

export default routes;
