import expess from 'express';
import LivroController from '../controller/livroController.js';


const routes = expess.Router();

routes.get('/livros',LivroController.listarLivros)
routes.post('/livros', LivroController.cadastrarLivros)
routes.get('/livros/:id',LivroController.encontrarUmLivro)
routes.put('/livros/:id',LivroController.mudarLivro)
routes.delete('/livros/:id',LivroController.deletarLivro)


export default routes