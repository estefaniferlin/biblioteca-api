const { Router } = require("express");

const controleAutores = require('./controladores/autores');
const controleLivros = require('./controladores/livros');

const rotas = new Router();

rotas.route('/autores')
    .get(controleAutores.getAutores)
    .post(controleAutores.addAutores)
    .put(controleAutores.updateAutores)

rotas.route('/autores/:codigo')
    .delete(controleAutores.deleteAutor)
    .get(controleAutores.getAutorPorCodigo)

rotas.route('/livros')
    .get(controleLivros.getLivros)
    .post(controleLivros.addLivros)
    .put(controleLivros.updateLivros)

rotas.route('/livros/:codigo')
    .delete(controleLivros.deleteLivro)
    .get(controleLivros.getLivroPorCodigo)

module.exports = rotas;