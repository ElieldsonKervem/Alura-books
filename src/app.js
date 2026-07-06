import express from "express";
import databaseConnection from "./config/dbconect.js";
import routes from "./routes/index.js";

import errorManipulator from "./middlewares/manipuladorDeErros.js";
import notFound from "./middlewares/manipulador404.js";

const conection  = await databaseConnection();

conection.on("error",(error)=>{
    console.error(error);
});



conection.once("open",()=>{
    console.log("Conexão feita com banco com sucesso");
});



const app = express(); 
routes(app);

app.use(errorManipulator);
app.use(notFound)

export default app;
