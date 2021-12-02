//modelagem do filme que será armazenado
const mongoose = require('mongoose');

const Filme = mongoose.model('Filme', {
    titulo: {
        type: String,
        //adição obrigatoria
        required: true,
    },
    // ano: Number,
    tipo: String,
    capa: String,
    logo: String,
    descricao: String,
    elenco: Array,
    generos: Array,
    cenas_momentos: Array,
    // url: String,
});

module.exports = Filme;