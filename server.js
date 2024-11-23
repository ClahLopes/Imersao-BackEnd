// Importa o framework Express, usado para criar o servidor e gerenciar rotas.
import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria a aplicação Express.
const app = express();
app.use(express.static("uploads"))
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console indicando que está escutando requisições.
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

