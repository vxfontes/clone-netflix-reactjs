//modelagem do filme que será armazenado
const mongoose = require('mongoose');

const Filme = mongoose.model('Filme', {
    titulo: {
        type: String,
        //adição obrigatoria
        required: true,
    },
    atores: Array,
    ano: Number,
    detalhes: Object,
    premiacoes: [Object],
    url: String,
});

module.exports = Filme;