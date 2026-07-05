import express from "express";
import databaseConnection from "./config/dbconect.js";
import routes from "./routes/index.js";
import mongoose from "mongoose";

const conection  = await databaseConnection();

conection.on("error",(error)=>{
    console.error(error);
});

conection.once("open",()=>{
    console.log("Conexão feita com banco com sucesso");
});



const app = express(); 
routes(app);

app.use((error,req,res,next)=>{
    if(error instanceof mongoose.Error.CastError){
        res.status(400).send({message:"Um ou dois dados repassados estão errados"})
    }else{
        res.status(500).send({messagem: "Erro interno do servidor"})
    }
})

export default app;
