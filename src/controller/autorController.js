import autores from "../models/Autor.js";

class AutorController{
    static async criarAutor(req,res){
        
        try{
          
            const novoAutor = await autores.create(req.body);
            res.status(200).json({message:"Autor criado",autores:novoAutor});
            
        }catch(erro){
            console.error("Erro do lado do servidor" + erro);
        }
    }


    static async trazerAutores(req,res){
        try{
            const trazerTodosOsAutores = await autores.find({});
            res.status(200).send({message:"Esse são todo os autores cadastrados", trazerTodosOsAutores});
        }catch(error){
            console.error("Ocorreu um erro nessa requisição", error);
        }
    }

    
    static async encontrarAutor(req,res){
        try{
            const {id} = req.params;
        
            const trazerAutor = await autores.findById(id);

            if(trazerAutor !== null){
            res.status(200).json({message:"Esse são todo os autores cadastrados", trazerAutor});
            }
            else{
               res.status(400).json({message:"Esse autor não foi encontrado"});
            }            
            
        }catch(error){
            console.erro("Autor com esse ID não foi encontrado ou Error no servidor " + error);
        }

    }


    static async editarAutor(req,res){
        try{
            const {id} = req.params;

            const editarInformacaoAutor = await autores.findByIdAndUpdate(id,req.body);
            res.status(200).json({message:"Informações alteradas com sucesso",editarInformacaoAutor });
        }catch(error){
                console.erro("Não foi possivel editar o autor com esse ID ou Error no servidor " + error);
        }
    }

    static async deleteAutor(req,res){
       try{
          const {id} = req.params;

         const deletarAutor =  await autores.findByIdAndDelete(id);
         res.status(200).json({mensage:"Autor deletado com sucesso", deletarAutor});
       }catch(error){
           console.erro("Não foi possivel deletar o autor com esse ID ou Error no servidor " + error);
       }
    }

};

export default AutorController;