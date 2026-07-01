import express from "express";
import databaseConnection from "./config/dbconect.js";
import routes from "./routes/index.js";

const conection  = await databaseConnection();

conection.on("error",(error)=>{
    console.error(error);
});

conection.once("open",()=>{
    console.log("Conexão feita com banco com sucesso");
});



const app = express(); 
routes(app);


    
export default app;
