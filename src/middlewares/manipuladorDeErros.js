import mongoose from "mongoose";
import ErroBase from "../erros/errorBase.js";
import requsicaoIncorreta from "../erros/requisicaoIncorreta.js";

function errorManipulator(error,req,res,next){
     if(error instanceof mongoose.Error.CastError){
        new requsicaoIncorreta().enviarResposta(res)
    }else{
        new ErroBase().enviarResposta(res)
    }
};

export default errorManipulator;