const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Metodos HTTP:
 * GET: Busca/Listar uma informaçao do back-end
 * POST: Cria uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informaçao no back-end
 */

/**
 * Tipos de Parametros
 * Query Params: parametros nomeados enviados na rota apos "?"(filtos,paginação)
 * Route Params: parametros ulilizados para identificar recursos
 * Request Body:corpo da requisicao, utilizado para criar ou alterar recursos
 */

app.listen(3333);
