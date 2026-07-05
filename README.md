# 📚 API Livraria

Uma API RESTful desenvolvida em Node.js para gerenciamento de um catálogo de livros. Este projeto permite realizar operações de CRUD (Criar, Ler, Atualizar e Deletar) de livros utilizando um banco de dados MongoDB.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

* **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript.
* **[Express](https://expressjs.com/):** Framework web rápido, flexível e minimalista para Node.js (v5.2.1).
* **[MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/):** Banco de dados NoSQL e biblioteca ODM para modelagem de dados.
* **[Dotenv](https://github.com/motdotla/dotenv):** Gerenciamento de variáveis de ambiente.
* **[Nodemon](https://nodemon.io/):** Utilitário para reiniciar o servidor automaticamente durante o desenvolvimento.
* **ES Modules:** Utilização do padrão `import/export` nativo do JavaScript.

## ⚙️ Funcionalidades

* `GET /livros`: Lista todos os livros cadastrados.
* `GET /livros/:id`: Busca um livro específico pelo seu ID.
* `POST /livros`: Cadastra um novo livro.
* `PUT /livros/:id`: Atualiza os dados de um livro existente.
* `DELETE /livros/:id`: Remove um livro do banco de dados.

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
* [Node.js](https://nodejs.org/en/download/)
* [Git](https://git-scm.com/)
* Uma conta no MongoDB Atlas ou o MongoDB instalado localmente.

 
