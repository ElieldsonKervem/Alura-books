import mongoose from "mongoose";


const autorSchema = new mongoose.Schema({
    nome: String,
    nacionalidade : String
},{versionKey: false });


const autores = mongoose.model("autores",autorSchema);
export default autores;