import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import produtosController from "./src/controllers/produtos/ProdutosController.js";

const app = express();
app.use(express.json());
app.use(produtosController);

const PORT = process.env.PORT || 8080;
app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)