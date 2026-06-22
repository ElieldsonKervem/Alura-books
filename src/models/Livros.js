

import mongoose from "mongoose";


const livrariaSchema = new mongoose.Schema({
    
    titulo: {type:String},
    paginas: {type: Number}

}, { versionKey: false });


const livro = mongoose.model("livros", livrariaSchema);
export default livro;





