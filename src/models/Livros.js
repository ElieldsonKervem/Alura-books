//vamos criar os modelos baseados nos modelos do moongose. 


import mongoose from "mongoose";

//primeiramente importe o mongose, vamos criar o modelo de acordo com modelo do mongose, logo, vamos seguir todos os modelos da biblioteca. Igual com prisma. agora eu extrai a funcao construtora ou classe schema para poder trabalhar meu schema. modelo objeto de configuração de qualquer documento que eu esteja trabalhando.


//precisa depois fazer a conexão do schema com modelo que já existe no banco de dados para que e apersistencia seja salva

const livrariaSchema = new mongoose.Schema({
    
    titulo: {type:String},
    paginas: {type: Number}

}, { versionKey: false });


const livro = mongoose.model("livros", livrariaSchema);
export default livro;





//se precisar passar mais dados para mais configurações
