const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
//manipular o mongo com javascript
const mongoose = require('mongoose');

const app = express();

const routes = require('./src/routes/filmes.routes');
mongoose.connect('mongodb://localhost:27017/netflix');

//utilizações
app.use(bodyParser.json())
app.use(morgan('dev'));


// prefixo de todas as rotas
app.use('/', routes);


//////////////////////////////////////////////////////////
app.listen(8080, () => {
    console.log('Servidor online');
});