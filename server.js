import "dotenv/config";
import app from "./src/app.js";
const PORT = 3032;


app.listen(PORT,()=>{
    console.log("Servidor rodando");
});
