const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const database = require('./services/database');
const filmeRoutes = require('./routes/filmes.routes');
const usuarioRoutes = require('./routes/usuarios.routes');
const episodiosRoutes = require('./routes/episodios.routes');

//middlewares
app.use(bodyParser.json())
//responses de crud
app.use(morgan('dev'));
//controle de acesso: ao ser usado com o frontend, desfaz o bloqueio automatico do localhost
app.use(cors());


// ROTAS
app.use('/', filmeRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/episodios', episodiosRoutes);


//////////////////////////////////////////////////////////
app.listen(8080, () => {
    console.log('Servidor online');
});