

    import mongoose from "mongoose";
    import {livro} from "../models/index.js";

    class LivroController{
    
      static async listarLivros(req,res){
        let { limite = 5, pagina = 1 } = req.query;
        const {id} = req.params;

        limite = parseInt(limite);
        pagina = parseInt(pagina);

        const listarLivros = await livro.find({}).sort({
          id: 1
        })
          .skip((pagina - 1) * limite)
          .limit(limite)
          .populate("autor");
          
          res.status(200).json(listarLivros);
      }

      static async cadastrarLivros(req,res){
          try{
            const newBook = await livro.create(req.body);
            res.status(200).json({message:"Livro criado com sucesso",livro:newBook});
          }
          catch(erro){
              res.status(500).json({message: `${erro.message} - falha no servidor`});
          }


          

      }
      
      static async encontrarUmLivro(req,res,next){
        
        
          try{
          
            const {id} = req.params;
            
              const pagandoLivro = await livro.findById(id);
              if(pagandoLivro !== null){
                res.status(200).json({message:"Livro encontrado", pagandoLivro});
              }
              else{
                res.status(404).json({ message: "Id do livro não localizado." });
              }
          }catch(error){
          next(error)
          }
      }

        static async mudarLivro(req,res){
          try{
            const {id} = req.params;
            const pagandoLivro = await livro.findByIdAndUpdate(id,req.body);
            
            res.status(200).json({message:"Livro encontrado", pagandoLivro});
            
          }catch(error){
            res.status(500).send("erro do servidor " + error);
          }
      }

      static async deletarLivro(req,res){
          try{
            const {id} = req.params;
            const pagandoLivro = await livro.findByIdAndDelete(id);
            
            res.status(200).json({message:"Livro Deletado com sucesso", pagandoLivro});
            
          }catch(error){
            res.status(500).send("erro do servidor " + error);
          }
      }

      static async encontrarLivroPorNome(req,res,next){
        try{
          
            const {titulo} = req.query;
            const regex = new RegExp(titulo,"i")
            const pagandoLivro = await livro.find({ titulo: regex });
              if(pagandoLivro.length > 0){
                res.status(200).json(pagandoLivro);
              }
              else{
                res.status(404).json({ message: "Id do livro não localizado." });
              }
          }catch(error){
          next(error)
          }
      }

    }



    export default LivroController;