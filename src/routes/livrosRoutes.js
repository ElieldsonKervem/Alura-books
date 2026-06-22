import expess from 'express';
import LivroController from '../controller/livroController.js';

//quem cuida das rotas é o express logo ele tem que está na pastas routes

//de maneira geral as routers são como o cardapio onde o cliente faz requisão nas rotas, passo para a rota o controller responsavel que vai cuidar delas, ou seja o garçom dessa brincadeira. ele sabe como lidar com a requisição e passa tudo para o model que é quem cuida de trabalhar como o conexão com o banco de dados, ele é o chefe da cozinha traz tudo pronto pra ser enviado de volta. logo ele se comunica com o contrller

const routes = expess.Router();

routes.get('/livros',LivroController.listarLivros)
routes.post('/livros', LivroController.cadastrarLivros)
routes.get('/livros/:id',LivroController.encontrarUmLivro)
routes.put('/livros/:id',LivroController.mudarLivro)
routes.delete('/livros/:id',LivroController.deletarLivro)

//claro como se trata de um objeto preciso utilizar a notação .  para expecificar o metodo que vou utilizar para resolver

export default routes