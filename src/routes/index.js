//para não ter problema com varias rotas trabalhando espalhados, temos um barril de rotas o barril pattern para lidar com elas

import express from 'express';
import livros from './livrosRoutes.js'

//legal agora preciso criar uma funcao para lidar com todas as rotas que vem pra esse end point, e vou usar ela como um middleware para app. vamos colocar os middlewares da nossa aplicação aqui tbm

const routes = (app) =>{
   app.route("/").get((req,res) => res.status(200).send("Bem vindo"));

   app.use(express.json(), livros)
}

//percebeu o metodo route ali no singular? ele é um metodo builtin express qeu permite que vc defina a rota apenas uma vez, lembra que antes era, app.get, app.set app.post? aqui continua a mesma logica, mas não precisar criar um post para /livros por exemplo, mas usar o route uma vez e usar o metodo para cada uma das alterações

//lembra que app. use é um middleware global, entõa vmaos usar ele a requisição vai chegar na nossa rota e vamos direcionar atraves do index.js
export default routes;