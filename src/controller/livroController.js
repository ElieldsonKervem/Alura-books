//na pasta de controller é onde criamos a interface entre app e as rotas

//controller vai ter que lidar com as requisições, logo ele precisa saber sobre o model de livros

import livro from "../models/Livros.js";

class LivroController{
  //criar os metodos de livros aqui
 
  static async listarLivros(req,res){
       const listarLivros = await livro.find({});
        console.log(listarLivros);
        
        // Substituindo o send(JSON.stringify()) pelo res.json()
        res.status(200).json(listarLivros);
  }

  static async cadastrarLivros(req,res){
      try{
        const newBook = await livro.create(req.body)
        res.status(200).json({message:"Livro criado com sucesso",livro:newBook});
      }
      catch(erro){
          res.status(500).json({message: `${erro.message} - falha no servidor`})
      }


      

      // é sempre bom usar try catch para lidar com erros e sucessos e fica aqui pq erros de rotas devem ser tratadas fora de rotas
  }
  
  static async encontrarUmLivro(req,res){
       try{
        const {id} = req.params
        
          const pagandoLivro = await livro.findById(id)
          res.status(200).json({message:"Livro encontrado", pagandoLivro})
       }catch(error){
         res.status(500).send('erro do servidor ' + error)
       }
  }

    static async mudarLivro(req,res){
       try{
        const {id} = req.params
        const pagandoLivro = await livro.findByIdAndUpdate(id,req.body)
        
        res.status(200).json({message:"Livro encontrado", pagandoLivro})
        
       }catch(error){
         res.status(500).send('erro do servidor ' + error)
       }
  }

  static async deletarLivro(req,res){
       try{
        const {id} = req.params
        const pagandoLivro = await livro.findByIdAndDelete(id)
        
        res.status(200).json({message:"Livro Deletado com sucesso", pagandoLivro})
        
       }catch(error){
         res.status(500).send('erro do servidor ' + error)
       }
  }

}

//para não precsar ter que instanciar minhas classe com operador new sempre que for trabalhar com elas eu posso usar o static

export default LivroController;