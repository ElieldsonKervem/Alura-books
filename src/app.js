import express from 'express';
import databaseConnection from './config/dbconect.js'
import routes from './routes/index.js';

const conection  = await databaseConnection();

conection.on("error",(error)=>{
    console.error(error)
})

conection.once("open",()=>{
    console.log('Conexão feita com banco com sucesso')
})

//conexão com banco

const app = express(); //conjunto de condigo dentro de app
routes(app)


    //metodo pra deletar de um array de objetos é splice
    //olha que legal eu não pricesei interar sobre, pq eu já tinha feito a filtragem


//precisa colocar async para lidar com assincronismo

//forma de passar os dados é sempre  /1 ou /2 ou sejá qual form o 
//stringify, transforma nossa resposta em um json que lá do outro lado vai ser usado pelo banco de dados ou pelo front end
export default app;
