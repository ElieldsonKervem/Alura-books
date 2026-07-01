

import mongoose from "mongoose";



const livrariaSchema = new mongoose.Schema({
    
    titulo: {type:String},
    paginas: {type: Number},
    autor:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "autores",
        required:true
    }

}, { versionKey: false });


const livro = mongoose.model("livros", livrariaSchema);
export default livro;





